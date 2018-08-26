# -*- coding: utf-8 -*-

from plone.app.uuid.utils import uuidToObject
from zope.annotation.interfaces import IAnnotations
from zope.publisher.browser import BrowserView

import logging


logger = logging.getLogger('collective.abctune:getOUTPUTS ')


class tunesListCollection(BrowserView):
    """ AJAX method/view"""
    def __call__(self, uuid, key):
        abc = uuidToObject(uuid)
        annot = IAnnotations(abc)
        try:
            output = annot.get(key)
            # logger.info(key)
            # logger.info(output)
            return '<pre>' + output + '</pre>'
        except Exception:
            return ''
