# -*- coding: utf-8 -*-
# from plone import api
from Products.CMFPlone.interfaces import INonInstallable
from zope.interface import implementer


@implementer(INonInstallable)
class HiddenProfiles(object):

    def getNonInstallableProfiles(self):
        """Hide uninstall profile from site-creation and quickinstaller"""
        return [
            'collective.abctune:uninstall',
        ]


def post_install(context):
    """Post install script"""
    if context.readDataFile('collectiveabctune_default.txt') is None:
        return
    # Do something during the installation of this package
    # site = api.portal.get()
    # qi = site.restrictedTraverse('portal_quickinstaller')
    # qi.reinstallProducts('collective.abctransforms')


def uninstall(context):
    """Uninstall script"""
    if context.readDataFile('collectiveabctune_uninstall.txt') is None:
        return
    # Do something during the uninstallation of this package
