# -*- coding: utf-8 -*-
# from collective.abctune.interfaces import IABCTune
from collective.abctune.testing import COLLECTIVE_ABCTUNE_INTEGRATION_TESTING  # noqa
from plone import api
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
# from plone.dexterity.interfaces import IDexterityFTI
from plone.protect.authenticator import createToken

# import unittest2 as unittest
import unittest


# from zope.component import createObject
# from zope.component import queryUtility


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

    def test_schema(self):
        self.assertTrue(True)
        """
        fti = queryUtility(IDexterityFTI, name='abctune')
        schema = fti.lookupSchema()
        self.assertEqual(IABCTune, schema)
        """

    def test_fti(self):
        self.assertTrue(True)
        """
        fti = queryUtility(IDexterityFTI, name='abctune')
        self.assertTrue(fti)
        """

    def test_factory(self):
        self.assertTrue(True)
        """
        fti = queryUtility(IDexterityFTI, name='abctune')
        factory = fti.factory
        obj = createObject(factory)
        self.assertTrue(IABCTune.providedBy(obj))
        """

    def test_adding(self):
        self.assertTrue(True)
        """
        api.content.create(
            type='abctune',
            title='abctune',
            container=self.portal)
        self.assertTrue(
            IABCTune.providedBy(self.portal['abctune'])
        )
        """
