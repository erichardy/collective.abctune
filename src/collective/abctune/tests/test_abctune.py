# -*- coding: utf-8 -*-
from collective.abctune.interfaces import Iabctune
from collective.abctune.testing import COLLECTIVE_ABCTUNE_INTEGRATION_TESTING  # noqa
from plone import api
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from plone.dexterity.interfaces import IDexterityFTI
from zope.component import createObject
from zope.component import queryUtility

import unittest2 as unittest


class abctuneIntegrationTest(unittest.TestCase):

    layer = COLLECTIVE_ABCTUNE_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        setRoles(self.portal, TEST_USER_ID, ['Manager'])
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_schema(self):
        fti = queryUtility(IDexterityFTI, name='abctune')
        schema = fti.lookupSchema()
        self.assertEqual(Iabctune, schema)

    def test_fti(self):
        fti = queryUtility(IDexterityFTI, name='abctune')
        self.assertTrue(fti)

    def test_factory(self):
        fti = queryUtility(IDexterityFTI, name='abctune')
        factory = fti.factory
        obj = createObject(factory)
        self.assertTrue(Iabctune.providedBy(obj))

    def test_adding(self):
        api.content.create(
            type='abctune',
            title='abctune',
            container=self.portal)
        self.assertTrue(
            Iabctune.providedBy(self.portal['abctune'])
        )
