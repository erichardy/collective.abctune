# -*- coding: utf-8 -*-

from datetime import datetime
from plone.app.uuid.utils import uuidToObject
from zope.publisher.browser import BrowserView

import logging


logger = logging.getLogger('collective.abctune:updateABC: ')


class getPDF(BrowserView):
    """ AJAX method/view"""
    def __call__(self, uuid):
        # need to remove 'view' at the end if present
        today = datetime.today()
        microsecond = today.microsecond
        abc = uuidToObject(uuid)
        pdf = '<a src="" href="' + abc.absolute_url()
        pdf += '/@@download/pdfscore/'
        pdf += abc.pdfscore.filename
        pdf += '?' + str(microsecond) + '">'
        pdf += '<img src="'
        pdf += abc.absolute_url() + '/++plone++abctune/pdf-50x50.png">'
        pdf += '</a>'
        # logger.info(pdf)
        return pdf
