# -*- coding: utf-8 -*-

from plone import api
from zope.interface import implementer
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleVocabulary

import logging


logger = logging.getLogger('collective.abctune')


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
