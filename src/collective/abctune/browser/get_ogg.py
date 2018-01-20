# -*- coding: utf-8 -*-

from datetime import datetime
from plone.app.uuid.utils import uuidToObject
from zope.publisher.browser import BrowserView

import logging


logger = logging.getLogger('collective.abctune:updateABC: ')


class getOGG(BrowserView):
    """ AJAX method/view"""
    def __call__(self, uuid):
        # need to remove 'view' at the end if present
        abc = uuidToObject(uuid)
        try:
            today = datetime.today()
            microsecond = today.microsecond
            ogg = '<audio controls>'
            ogg += '<source type="audio/ogg" src="' + abc.absolute_url()
            ogg += '/@@download/ogg/'
            ogg += abc.ogg.filename + '?' + str(microsecond)
            # ogg += '?' + str(microsecond) + '">'
            ogg += '">'
            ogg += u'Your browser does not support the audio element.'
            ogg += '</audio>'
            # logger.info(ogg)
            return ogg
        except Exception:
            return None
