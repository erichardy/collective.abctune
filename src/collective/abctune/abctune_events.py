# -*- coding: utf-8 -*-

from collective.abctune.utils import addKeys
from collective.abctune.utils import addOrigins
from collective.abctune.utils import addQ
from collective.abctune.utils import addTuneType
from collective.abctune.utils import removeNonAscii
from collective.abctune.utils import validMIMEType
from plone import api

import logging


logger = logging.getLogger('collective.abctune')


def makeFullTune(context):
    validMIMEType(context)
    try:
        context.abc = removeNonAscii(context.abc)
        addQ(context)
        addTuneType(context)
        addOrigins(context)
        addKeys(context)
    except Exception:
        logger.info('cannot add misc fields...!!!')
    try:
        pt = api.portal.get_tool('portal_transforms')
    except Exception:
        logger.info('cannot get portal_transforms tool')
    try:
        midi = pt.convertTo('audio/x-midi', context.abc)
        context.midi = midi.getData()
    except Exception:
        logger.info('Failed to create MIDI')
    try:
        score = pt.convertTo('image/png', context.abc)
        context.score = score.getData()
    except Exception:
        logger.info('Failed to create score')
    try:
        pdfscore = pt.convertTo('application/pdf', context.abc)
        context.pdfscore = pdfscore.getData()
    except Exception:
        logger.info('Failed to create PDF score')
    try:
        sound = pt.convertTo('audio/mpeg', context.abc)
        context.sound = sound.getData()
    except Exception:
        logger.info('Failed to create MPEG sound')


def newAbcTune(context, event):
    """A FAIRE : add %abc at the begining of the file if
    not present (for mimetype recognition)
    Create mp3 (sound field) only when asked
    """
    makeFullTune(context)
    context.reindexObject()


def updateAbcTune(context, event):
    """A FAIRE : see newAbcTune
    """
    makeFullTune(context)
    context.reindexObject()
    """
    The event notifier below should be in module
    collective.abctuneset

    if parent.portal_type == 'abctuneset':
        log = '(IObjectModifiedEvent)abctune.updateAbcTune '
        log += parent.portal_type
        logger.info(log)
        notify(TuneInTuneSetModified(context))
    # _make_mp3(context)
    """


"""
This event handler should be in module
collective.abctuneset

# @grok.subscribe(IABCTune, ITuneInTuneSetModified)
def tuneInTuneSetModified(context, event):
    logger.info('(ITuneInTuneSetModified)abctune.tuneInTuneSetModified Event')
    updateTuneSet(context.aq_parent)
"""
