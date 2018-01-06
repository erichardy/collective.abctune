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


class recordsList(base.ViewletBase):

    def getAudioAttrs(self, record):
        """
        code from wildcard/media/browser/views.py: class AudioView(MediaView):
        """
        base_url = record.absolute_url()
        base_wurl = base_url + '/@@view/++widget++form.widgets.'
        self.audio_url = '%sIAudio.audio_file/@@stream' % (
            base_wurl
        )
        self.ct = record.audio_file.contentType
        return (self.audio_url, self.ct)
