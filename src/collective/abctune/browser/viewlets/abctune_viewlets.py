# -*- coding: utf-8 -*-

from plone import api
from plone.app.layout.viewlets import common as base

import logging


logger = logging.getLogger('abctuneMenu')


class abcList(base.ViewletBase):

    def getActions(self, action_category):
        """
        get abc_music_actions actions for the context and the user
        """
        actions = api.portal.get_tool(name='portal_actions')
        acts = actions.listFilteredActionsFor(
            self.context).get(action_category)
        return acts
