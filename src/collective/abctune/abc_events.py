# -*- coding: utf-8 -*-

from collective.abctune.utils import addKeys
from collective.abctune.utils import addOrigins
from collective.abctune.utils import addQ
from collective.abctune.utils import addTuneType
from collective.abctune.utils import removeNonAscii
from collective.abctune.utils import validMIMEType
from plone import api
from plone.i18n.normalizer.interfaces import INormalizer
from plone.namedfile.file import NamedBlobFile
from plone.namedfile.file import NamedBlobImage
from zope.component import getUtility

import logging


logger = logging.getLogger('collective.abctune')


def makeFullTune(context):
    validMIMEType(context)
    normalizer = getUtility(INormalizer)
    normalizedTitle = normalizer.normalize(context.title, locale='fr')
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
        midiData = pt.convertTo('audio/x-midi', context.abc)
        midiFilename = normalizedTitle + u'.mid'
        midiContentType = u'audio/mid'
        context.midi = NamedBlobFile()
        context.midi.data = midiData.getData()
        context.midi.contentType = midiContentType
        context.midi.filename = midiFilename
    except Exception:
        logger.info('Failed to create MIDI')
    try:
        scoreData = pt.convertTo('image/png', context.abc)
        scoreFilename = normalizedTitle + u'.png'
        scoreContenType = 'image/png'
        context.score = NamedBlobImage()
        context.score.data = scoreData.getData()
        context.score.filename = scoreFilename
        context.score.contentType = scoreContenType
    except Exception:
        logger.info('Failed to create PNG score')

    try:
        svgData = pt.convertTo('image/svg+xml', context.abc)
        svgFilename = normalizedTitle + u'.svg'
        svgContenType = 'image/svg+xml'
        context.svgscore = NamedBlobImage()
        context.svgscore.data = svgData.getData()
        context.svgscore.filename = svgFilename
        context.svgscore.contentType = svgContenType
    except Exception:
        logger.info('Failed to create SVG score')

    try:
        pdfData = pt.convertTo('application/pdf', context.abc)
        pdfFilename = normalizedTitle + u'.pdf'
        pdfContenType = 'application/pdf'
        context.pdfscore = NamedBlobImage()
        context.pdfscore.data = pdfData.getData()
        context.pdfscore.filename = pdfFilename
        context.pdfscore.contentType = pdfContenType
    except Exception:
        logger.info('Failed to create PDF score')

    try:
        mp3Data = pt.convertTo('audio/mpeg', context.abc)
        mp3Filename = normalizedTitle + u'.mp3'
        mp3ContenType = 'audio/mpeg'
        context.mp3 = NamedBlobImage()
        context.mp3.data = mp3Data.getData()
        context.mp3.filename = mp3Filename
        context.mp3.contentType = mp3ContenType
    except Exception:
        logger.info('Failed to create MPEG sound')
    updateOGG(context, normalizedTitle, pt)
    """
    try:
        oggData = pt.convertTo('audio/x-ogg', context.abc)
        oggFilename = normalizedTitle + u'.ogg'
        oggContenType = 'audio/x-ogg'
        context.ogg = NamedBlobImage()
        context.ogg.data = oggData.getData()
        context.ogg.filename = oggFilename
        context.ogg.contentType = oggContenType
    except Exception:
        logger.info('Failed to create OGG sound')
    """


def updateOGG(context, normalizedTitle, pt):
    try:
        oggData = pt.convertTo('audio/x-ogg', context.abc)
        oggFilename = normalizedTitle + u'.ogg'
        oggContenType = 'audio/ogg'
        context.ogg = NamedBlobImage()
        context.ogg.data = oggData.getData()
        context.ogg.filename = oggFilename
        context.ogg.contentType = oggContenType
    except Exception:
        logger.info('Failed to create OGG sound')


def newAbc(context, event):
    """A FAIRE : add %abc at the begining of the file if
    not present (for mimetype recognition)
    Create mp3 (sound field) only when asked
    """
    makeFullTune(context)
    context.reindexObject()


def updateAbc(context, event):
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
