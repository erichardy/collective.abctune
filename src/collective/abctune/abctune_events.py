# -*- coding: utf-8 -*-

from collective.abctune.utils import addKeys
from collective.abctune.utils import addOrigins
from collective.abctune.utils import addQ
from collective.abctune.utils import addTuneType
from collective.abctune.utils import removeNonAscii
from plone import api

import logging


logger = logging.getLogger('collective.abctune')


def newAbcTune(context, event):
    """A FAIRE : add %abc at the begining of the file if
    not present (for mimetype recognition)
    Create mp3 (sound field) only when asked
    """
    try:
        context.abc = removeNonAscii(context.abc)
        addQ(context)
        addTuneType(context)
        addOrigins(context)
        addKeys(context)
        pt = api.portal.get_tool('portal_transforms')
        midi = pt.convertTo('audio/x-midi', context.abc)
        context.midi = midi.getData()
        score = pt.convertTo('image/png', context.abc)
        context.score = score.getData()
        sound = pt.convertTo('audio/mpeg', context.abc)
        context.sound = sound.getData()
        logger.info('abc created !')
    except Exception:
        logger.info('abctune not created...')


def updateAbcTune(context, event):
    """A FAIRE : see newAbcTune
    """
    try:
        context.abc = removeNonAscii(context.abc)
        addQ(context)
        addTuneType(context)
        addOrigins(context)
        addKeys(context)
        pt = api.portal.get_tool('portal_transforms')
        midi = pt.convertTo('audio/x-midi', context.abc)
        context.midi = midi.getData()
        score = pt.convertTo('image/png', context.abc)
        context.score = score.getData()
        sound = pt.convertTo('audio/mpeg', context.abc)
        context.sound = sound.getData()
        """
        This event notifier should be in module
        collective.abctuneset

        if parent.portal_type == 'abctuneset':
            log = '(IObjectModifiedEvent)abctune.updateAbcTune '
            log += parent.portal_type
            logger.info(log)
            notify(TuneInTuneSetModified(context))
        # _make_mp3(context)
        """

    except Exception:
        logger.info('updateAbcTune : abctune not modified...')
    # logger.info("abc edited/modified !")


"""
This event handler should be in module
collective.abctuneset

# @grok.subscribe(IABCTune, ITuneInTuneSetModified)
def tuneInTuneSetModified(context, event):
    logger.info('(ITuneInTuneSetModified)abctune.tuneInTuneSetModified Event')
    updateTuneSet(context.aq_parent)
"""

# for addForm, see : https://pypi.python.org/pypi/plone.directives.form/1.1
# class Add(dexterity.AddForm):
#    grok.name('abctune')
#    grok.template('addAbcTune')
