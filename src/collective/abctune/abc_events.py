# -*- coding: utf-8 -*-

from collective.abctune.utils import addKeys
from collective.abctune.utils import addOrigins
from collective.abctune.utils import addQ
from collective.abctune.utils import addTuneType
from collective.abctune.utils import annotateObject
from collective.abctune.utils import removeNonAscii
from collective.abctune.utils import validMIMEType
from plone import api
from plone.i18n.normalizer.interfaces import INormalizer
from plone.namedfile.file import NamedBlobFile
from plone.namedfile.file import NamedBlobImage
from zope.component import getUtility

import logging


logger = logging.getLogger('collective.abctune:abc_events')


def makeFullTune(context, updateSound=True):
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
        msg = u'cannot add misc fields...!!!'
        logger.info(msg)
        annotateObject(context, msg=msg, key='ABC_ERRORS')
    try:
        pt = api.portal.get_tool('portal_transforms')
    except Exception:
        msg = u'cannot get portal_transforms tool'
        logger.info(msg)
        annotateObject(context, msg=msg, key='ABC_ERRORS')
    # For now, we only make SVG, PDF and OGG !
    updateSVG(context, normalizedTitle, pt)
    updatePDF(context, normalizedTitle, pt)
    # updatePNG(context, normalizedTitle, pt)
    if updateSound:
        updateOGG(context, normalizedTitle, pt)


def updateSVG(context, normalizedTitle, pt):
    """
    :param context: an object with ``abc`` and ``svgscore`` fields
    :type context: usualy a ABC object
    :param normalizedTitle: used for the blob filename
    :type normalizedTitle: string
    :param pt: tool
    :type pt: portal_tranform tool
    :returns: nothing, update the ``svgscore`` field of the object
    """
    try:
        svgData = pt.convertTo(
            'image/svg+xml',
            context.abc,
            context=context,
            annotate=True
            )
        svgFilename = normalizedTitle + u'.svg'
        svgContenType = 'image/svg+xml'
        context.svgscore = NamedBlobImage()
        context.svgscore.data = svgData.getData()
        context.svgscore.filename = svgFilename
        context.svgscore.contentType = svgContenType
    except Exception:
        msg = u'Failed to create SVG score'
        logger.info(msg)
        annotateObject(context, msg=msg, key='ABC_ERRORS')


def updatePDF(context, normalizedTitle, pt):
    """
    :param context: an object with a ``pdfscore`` field
    :type context: usualy a ABC object
    :param normalizedTitle: used for the blob filename
    :type normalizedTitle: string
    :param pt: tool
    :type pt: portal_tranform tool
    :returns: nothing, update the ``pdfscore`` field of the object
    """
    try:
        pdfData = pt.convertTo(
            'application/pdf',
            context.abc,
            context=context,
            annotate=True,
            )
        pdfFilename = normalizedTitle + u'.pdf'
        pdfContenType = 'application/pdf'
        context.pdfscore = NamedBlobImage()
        context.pdfscore.data = pdfData.getData()
        context.pdfscore.filename = pdfFilename
        context.pdfscore.contentType = pdfContenType
    except Exception:
        msg = u'Failed to create PDF score'
        logger.info(msg)
        annotateObject(context, msg=msg, key='ABC_ERRORS')


def updateMP3(context, normalizedTitle, pt):
    """
    :param context: an object with a ``mp3`` field
    :type context: usualy a ABC object
    :param normalizedTitle: used for the blob filename
    :type normalizedTitle: string
    :param pt: tool
    :type pt: portal_tranform tool
    :returns: nothing, update the ``mp3`` field of the object
    """
    try:
        mp3Data = pt.convertTo(
            'audio/mpeg',
            context.abc,
            context=context,
            annotate=True,
            )
        mp3Filename = normalizedTitle + u'.mp3'
        mp3ContenType = 'audio/mpeg'
        context.mp3 = NamedBlobImage()
        context.mp3.data = mp3Data.getData()
        context.mp3.filename = mp3Filename
        context.mp3.contentType = mp3ContenType
    except Exception:
        msg = u'Failed to create MPEG/MP3 sound'
        logger.info(msg)
        annotateObject(context, msg=msg, key='ABC_ERRORS')


def updateMIDI(context, normalizedTitle, pt):
    """
    :param context: an object with a ``midi`` field
    :type context: usualy a ABC object
    :param normalizedTitle: used for the blob filename
    :type normalizedTitle: string
    :param pt: tool
    :type pt: portal_tranform tool
    :returns: nothing, update the ``midi`` field of the object
    """
    try:
        midiData = pt.convertTo(
            'audio/x-midi',
            context.abc,
            context=context,
            annotate=True,
            )
        midiFilename = normalizedTitle + u'.mid'
        midiContentType = u'audio/mid'
        context.midi = NamedBlobFile()
        context.midi.data = midiData.getData()
        context.midi.contentType = midiContentType
        context.midi.filename = midiFilename
    except Exception:
        msg = u'Failed to create MIDI'
        logger.info(msg)
        annotateObject(context, msg=msg, key='ABC_ERRORS')


def updatePNG(context, normalizedTitle, pt):
    """
    :param context: an object with a ``score`` field
    :type context: usualy a ABC object
    :param normalizedTitle: used for the blob filename
    :type normalizedTitle: string
    :param pt: tool
    :type pt: portal_tranform tool
    :returns: nothing, update the ``score`` field of the object
    """
    try:
        scoreData = pt.convertTo(
            'image/png',
            context.abc,
            context=context,
            annotate=True,
            )
        scoreFilename = normalizedTitle + u'.png'
        scoreContenType = 'image/png'
        context.score = NamedBlobImage()
        context.score.data = scoreData.getData()
        context.score.filename = scoreFilename
        context.score.contentType = scoreContenType
    except Exception:
        msg = u'Failed to create PNG score'
        logger.info(msg)
        annotateObject(context, msg=msg, key='ABC_ERRORS')


def updateOGG(context, normalizedTitle, pt):
    """
    :param context: an object with a ``ogg`` field
    :type context: usualy a ABC object
    :param normalizedTitle: used for the blob filename
    :type normalizedTitle: string
    :param pt: tool
    :type pt: portal_tranform tool
    :returns: nothing, update the ``ogg`` field of the object
    """
    try:
        oggData = pt.convertTo(
            'audio/ogg',
            context.abc,
            context=context,
            annotate=True,
            )
        oggFilename = normalizedTitle + u'.ogg'
        oggContenType = 'audio/ogg'
        context.ogg = NamedBlobImage()
        context.ogg.data = oggData.getData()
        context.ogg.filename = oggFilename
        context.ogg.contentType = oggContenType
    except Exception:
        msg = u'Failed to create OGG sound'
        logger.info(msg)
        annotateObject(context, msg=msg, key='ABC_ERRORS')


def newAbc(context, event):
    """
    :param context: the object for which the fields will be completed
    :type context: an ABC object
    """
    makeFullTune(context, updateSound=False)
    context.reindexObject()


def updateAbc(context, event):
    """A FAIRE : see newAbcTune
    """
    makeFullTune(context, updateSound=False)
    context.reindexObject()
