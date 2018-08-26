# -*- coding: utf-8 -*-

from zope.publisher.browser import BrowserView
from collective.abctune.utils import sort_by_title
from plone import api

import logging


logger = logging.getLogger('collective.abctune:getOUTPUTS ')


class tunesListFolder(BrowserView):
    """ AJAX method/view"""
    def getTunes(self):
        objs = api.content.find(
            portal_type='tune',
            context=self.context,
            depth=1,
            )
        return sorted(
            [obj.getObject() for obj in objs],
            sort_by_title
            )
