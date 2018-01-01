# -*- coding: utf-8 -*-

from datetime import datetime
from plone.app.uuid.utils import uuidToObject
from zope.publisher.browser import BrowserView

import logging


logger = logging.getLogger('collective.abctune:updateABC: ')


class getSVG(BrowserView):
    """ AJAX method/view"""
    def __call__(self, uuid):
        today = datetime.today()
        microsecond = today.microsecond
        abc = uuidToObject(uuid)
        svg = '<img src="' + abc.absolute_url() + '/@@download/svgscore/'
        svg += abc.svgscore.filename
        svg += '?' + str(microsecond) + '">'
        return svg
