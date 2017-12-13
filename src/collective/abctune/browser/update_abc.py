# -*- coding: utf-8 -*-

from collective.abctune.abc_events import makeFullTune
from datetime import datetime
from plone.app.uuid.utils import uuidToObject
from zope.publisher.browser import BrowserView

import json
import logging


logger = logging.getLogger('collective.abctune:updateABC: ')


class updateABC(BrowserView):
    """ AJAX method/view"""
    def __call__(self, abctext, uuid, makeSound):
        # need to remove 'view' at the end if present
        today = datetime.today()
        microsecond = today.microsecond
        abc = uuidToObject(uuid)
        abc.abc = abctext
        makeFullTune(abc, updateSound=False)
        abc.reindexObject()
        abc_returned = {}
        svg = '<img src="' + abc.absolute_url() + '/@@download/svgscore/'
        svg += abc.svgscore.filename
        svg += '/?' + str(microsecond) + '">'
        abc_returned['svg'] = svg
        abc_returned['pdf'] = 'url de pdf'
        abc_returned['ogg'] = 'url de ogg'
        abc_returned['toto'] = u'toto'
        # import pdb;pdb.set_trace()
        logger.info(json.dumps(abc_returned))
        return json.dumps(abc_returned)
