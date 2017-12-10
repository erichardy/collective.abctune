# -*- coding: utf-8 -*-

from datetime import datetime
from plone import api
from zope.annotation.interfaces import IAnnotations
from zope.interface import implementer
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleVocabulary

import logging


logger = logging.getLogger('collective.abctune:utils')

ABC_ANNOTATIONS_KEYS = [
    'ABC_ERRORS',
    'abc2midi_ERRORS',
    'abc2midi_OUTPUT',
    'abcm2ps_ERRORS',
    'abcm2ps_OUTPUT',
    'ps2pdf_ERRORS',
    'ps2pdf_OUTPUT',
    'timidity_ERRORS',
    'timidity_OUTPUT',
    ]


def getCmdOutput(key, annot):
    out = annot.get(key)
    if out:
        return out.replace('\n', '<br />')
    else:
        return u''


def removeNonAscii(s):
    return ''.join(i for i in s if ord(i) < 128)


def validMIMEType(t):
    """A valid ABC file (for MIME recognition) MUST
    start with the line :
    %abc
    """
    firstLine = t.abc.split('\n')[0][:4]
    if firstLine != u'%abc':
        t.abc = u'%abc\n' + t.abc
    t.reindexObject()


@implementer(IVocabularyFactory)
class _getLocalTunes(object):

    def __call__(self, context):
        results = api.content.find(
            portal_type='abctune',
            depth=1,
            context=context
            )
        terms = []
        i = 0
        for tune in results:
            obj = tune.getObject()
            value = str(i)
            token = str(i)
            label = obj.title
            terms.append(SimpleVocabulary.createTerm(
                value,
                str(token),
                label
                )
            )
            i += 1

        return SimpleVocabulary(terms)


getLocalTunes = _getLocalTunes()


def addQ(context):
    abc = context.abc
    if len(abc.split('Q:')) == 1:
        labc = abc.split('\n')
        labc.insert(1, 'Q:100')
        abc = ('\n').join(labc)
        context.abc = abc


def addTuneType(context):
    abc = context.abc
    labc = abc.split('R:')
    if len(labc) != 1:
        tunetype = labc[1].split('\n')[0]
        context.tunetype = tunetype.strip().lower()
    else:
        context.tunetype = 'unknown'


def addOrigins(context):
    abc = context.abc
    labc = abc.split('O:')
    if len(labc) > 1:
        tuneOrigins = labc[1].split('\n')[0].split(';')
        context.tunecountry = tuneOrigins[0]
        if len(tuneOrigins) != 1:
            context.tunearea = ';'.join(tuneOrigins[1:])
    else:
        context.tunearea = 'unknown'


def addKeys(context):
    abc = context.abc
    keys = []
    for line in abc.split('\n'):
        if line[:2] == 'K:':
            key = line.split(':')[1].strip()
            if key not in keys:
                keys.append(key)
    context.tunekeys = keys


def annotateObject(context, msg=u'', key='TUNE_KEY', maxsize=5000):
    """
    :param context: the object which will receive annotation
    :type context: an ABC object
    :param msg: the content of the annotation
    :type msg: string
    :returns: True if success, False if object not annotable.
        Create or update the annotation ``KEY``
        for the object, with time and date of the annotation, and
        ensure that the annotation has not max size than
        5000 chars or maxsize (if given)
    """
    try:
        annot = IAnnotations(context)
    except Exception:
        logger.info('Object cannot be annotable:')
        logger.info(context)
        return False
    key = key
    annotations = annot.get(key)
    now = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
    if annotations is None:
        annot[key] = u'-- ' + now + u' : ' + msg
        return True
    msg = annotations + u'\n-- ' + now + u' : ' + msg
    if len(msg) > maxsize:
        msg = msg[len(msg) - maxsize:]
        annot[key] = msg
    else:
        annot[key] = msg
    return True
