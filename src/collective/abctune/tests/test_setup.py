# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from collective.abctune.testing import COLLECTIVE_ABCTUNE_INTEGRATION_TESTING  # noqa
from plone import api

import unittest


class TestSetup(unittest.TestCase):
    """Test that collective.abctune is properly installed."""

    layer = COLLECTIVE_ABCTUNE_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if collective.abctune is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'collective.abctune'))

    def test_browserlayer(self):
        """Test that ICollectiveAbctuneLayer is registered."""
        from collective.abctune.interfaces import (
            ICollectiveAbctuneLayer)
        from plone.browserlayer import utils
        self.assertIn(ICollectiveAbctuneLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = COLLECTIVE_ABCTUNE_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['collective.abctune'])

    def test_product_uninstalled(self):
        """Test if collective.abctune is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'collective.abctune'))

    def test_browserlayer_removed(self):
        """Test that ICollectiveAbctuneLayer is removed."""
        from collective.abctune.interfaces import ICollectiveAbctuneLayer
        from plone.browserlayer import utils
        self.assertNotIn(ICollectiveAbctuneLayer, utils.registered_layers())
