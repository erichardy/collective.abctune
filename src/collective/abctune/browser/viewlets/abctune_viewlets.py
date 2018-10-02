# -*- coding: utf-8 -*-

# from plone import api
from plone.app.layout.viewlets import common as base
from plone.protect.interfaces import IDisableCSRFProtection
from zope.interface import alsoProvides

import logging


logger = logging.getLogger('abctuneMenu')


class abcList(base.ViewletBase):

    pass


class recordsList(base.ViewletBase):

    def getAudioAttrs(self, record):
        """
        code from wildcard/media/browser/views.py: class AudioView(MediaView):
        """
        alsoProvides(self.request, IDisableCSRFProtection)
        base_url = record.absolute_url()
        base_wurl = base_url + '/@@view/++widget++form.widgets.'
        self.audio_url = '%sIAudio.audio_file/@@stream' % (
            base_wurl
        )
        self.ct = record.audio_file.contentType
        return (self.audio_url, self.ct)
