# -*- coding: utf-8 -*-

from collective.abctune.abc_events import makeFullTune
from plone.app.uuid.utils import uuidToObject
from zope.publisher.browser import BrowserView

import logging


logger = logging.getLogger('collective.abctune:updateABC: ')


class updateABC(BrowserView):
    """ AJAX method/view"""
    def __call__(self, abctext, uuid, makeSound):
        abc = uuidToObject(uuid)
        abc.abc = abctext
        makeFullTune(abc, updateSound=True)
        abc.reindexObject()
        return 1
