# -*- coding: utf-8 -*-
from zope.publisher.browser import BrowserView


class onlyABC(BrowserView):
    def getABC(self):
        try:
            return self.context.abc
        except Exception:
            return u'no-abc'
