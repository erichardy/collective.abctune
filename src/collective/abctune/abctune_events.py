# -*- coding: utf-8 -*-

import logging
from collective.abctune.interfaces import Iabctune
from collective.abctune.utils import removeNonAscii
from collective.abctune.utils import (addQ,
                                      addTuneType,
                                      addOrigins,
                                      addKeys
                                      )

logger = logging.getLogger('collective.abctune')


# @grok.subscribe(IABCTune, IObjectCreatedEvent)
def newAbcTune(context, event):
    try:
        context.abc = removeNonAscii(context.abc)
        addQ(context)
        addTuneType(context)
        addOrigins(context)
        addKeys(context)
        _make_midi(context)
        _make_score(context)
        # _make_mp3(context)
        logger.info("abc created !")
    except:
        logger.info("abctune not created...")


# @grok.subscribe(IABCTune, IObjectModifiedEvent)
def updateAbcTune(context, event):
    try:
        context.abc = removeNonAscii(context.abc)
        addQ(context)
        addTuneType(context)
        addOrigins(context)
        addKeys(context)
        _make_midi(context)
        _make_score(context)
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

    except:
        logger.info("updateAbcTune : abctune not modified...")
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
