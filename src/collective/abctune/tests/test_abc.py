# -*- coding: utf-8 -*-
from collective.abctune.interfaces import IABC
from collective.abctune.testing import COLLECTIVE_ABCTUNE_INTEGRATION_TESTING  # noqa
from plone import api
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from plone.dexterity.interfaces import IDexterityFTI
from plone.protect.authenticator import createToken
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
        self.request = self.layer['request']
        # Disable plone.protect for these tests
        self.request.form['_authenticator'] = createToken()
        # Eventuelly you find this also useful
        self.request.environ['REQUEST_METHOD'] = 'POST'
        self.tune = api.content.create(
            type='tune',
            title='tune',
            container=self.portal)

    def test_schema(self):
        fti = queryUtility(IDexterityFTI, name='abc')
        schema = fti.lookupSchema()
        self.assertEqual(IABC, schema)

    def test_fti(self):
        fti = queryUtility(IDexterityFTI, name='abc')
        self.assertTrue(fti)

    def test_factory(self):
        fti = queryUtility(IDexterityFTI, name='abc')
        factory = fti.factory
        obj = createObject(factory)
        self.assertTrue(IABC.providedBy(obj))

    def test_adding(self):
        api.content.create(
            type='abc',
            title='abc',
            container=self.tune)
        self.assertTrue(
            IABC.providedBy(self.tune['abc'])
        )
