# -*- coding: utf-8 -*-

from plone import api
from plone.app.layout.viewlets import common as base

import logging


logger = logging.getLogger('abctuneMenu')

"""
actions = portal.portal_actions
actions.listFilteredActionsFor(context).get('abc_music_actions')

(Pdb) acts = actions.listFilteredActionsFor(co).get('abc_music_actions')
(Pdb) acts[0]
{'available': True, 'category': 'abc_music_actions', 'description': '',
'icon': '', 'title': 'AbcView',
'url': <Products.CMFCore.Expression.Expression object at 0x10d4305f0>,
'visible': True, 'allowed': True, 'link_target': None, 'id': 'abcview'}
"""


class abctuneMenu(base.ViewletBase):

    def getActions(self, action_category):
        """
        get abc_music_actions actions for the context and the user
        """
        actions = api.portal.get_tool(name='portal_actions')
        acts = actions.listFilteredActionsFor(
            self.context).get(action_category)
        return acts

    def getTuneObject(self):
        """
        :returns: the tune where we are. If the context is an ABC or so...,
            returns the parent tune
        """
        co = self.context
        if co.portal_type == 'tune':
            return co
        return co.aq_parent
