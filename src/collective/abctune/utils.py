# -*- coding: utf-8 -*-

import logging
from zope.component.hooks import getSite
from zope.interface import implements
from zope.schema.vocabulary import SimpleVocabulary
from zope.schema.interfaces import IVocabularyFactory

logger = logging.getLogger('collective.abctune')


def removeNonAscii(s):
    return "".join(i for i in s if ord(i) < 128)


class _getLocalTunes(object):
    implements(IVocabularyFactory)

    def __call__(self, context):
        folder_path = '/'.join(context.getPhysicalPath())
        site = getSite()
        catalog = site.portal_catalog
        results = catalog.searchResults(portal_type='abctune',
                                        path={'query': folder_path,
                                              'depth': 1},
                                        )
        terms = []
        i = 0
        for tunes in results:
            tune = tunes.getObject()
            value = str(i)
            token = str(i)
            label = tune.title
            terms.append(SimpleVocabulary.createTerm(value,
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
        context.tunetype = "unknown"


def addOrigins(context):
    abc = context.abc
    labc = abc.split('O:')
    if len(labc) > 1:
        tuneOrigins = labc[1].split('\n')[0].split(';')
        context.tunecountry = tuneOrigins[0]
        if len(tuneOrigins) != 1:
            context.tunearea = ';'.join(tuneOrigins[1:])
    else:
        context.tunearea = "unknown"


def addKeys(context):
    abc = context.abc
    keys = []
    for line in abc.split('\n'):
        if line[:2] == 'K:':
            key = line.split(':')[1].strip()
            if key not in keys:
                keys.append(key)
    context.tunekeys = keys
