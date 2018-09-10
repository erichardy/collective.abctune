# -*- coding: utf-8 -*-

from zope.publisher.browser import BrowserView
from collective.abctune.utils import sort_by_title
from plone import api
from plone.protect.interfaces import IDisableCSRFProtection
from zope.interface import alsoProvides

import logging


logger = logging.getLogger('collective.abctune:tunesListFolder ')


class tunesListFolder(BrowserView):

    def getTunes(self, REQUEST=None):
        # CheckAuthenticator(self.request)
        alsoProvides(self.request, IDisableCSRFProtection)
        objs = api.content.find(
            portal_type='tune',
            context=self.context,
            depth=1,
            )
        return sorted(
            [obj.getObject() for obj in objs],
            sort_by_title
            )
