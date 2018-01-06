# -*- coding: utf-8 -*-

from plone import api
from plone.protect.interfaces import IDisableCSRFProtection
from Products.Five import BrowserView
from zope.interface import alsoProvides

import logging


logger = logging.getLogger('collective.abctune:reinstall')


class reinstall(BrowserView):
    def __call__(self):
        context = self.context
        logger.info(context)
        alsoProvides(self.request, IDisableCSRFProtection)
        site = api.portal.get()
        qi = site.restrictedTraverse('portal_quickinstaller')
        # qi.reinstallProducts('collective.abctransforms')
        qi.uninstallProducts(
            ['collective.abctune',
             'collective.abctransforms'])
        qi.installProduct('collective.abctune')
        # qi.reinstallProducts('collective.abctransforms')
        url = self.context.absolute_url()
        self.request.response.redirect(url)
