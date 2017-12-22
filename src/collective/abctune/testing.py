# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import collective.abctune


class CollectiveAbctuneLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # import pdb;pdb.set_trace()
        self.loadZCML(package=collective.abctune)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'collective.abctune:default')


COLLECTIVE_ABCTUNE_FIXTURE = CollectiveAbctuneLayer()


COLLECTIVE_ABCTUNE_INTEGRATION_TESTING = IntegrationTesting(
    bases=(COLLECTIVE_ABCTUNE_FIXTURE,),
    name='CollectiveAbctuneLayer:IntegrationTesting'
)


COLLECTIVE_ABCTUNE_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(COLLECTIVE_ABCTUNE_FIXTURE,),
    name='CollectiveAbctuneLayer:FunctionalTesting'
)


COLLECTIVE_ABCTUNE_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        COLLECTIVE_ABCTUNE_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='CollectiveAbctuneLayer:AcceptanceTesting'
)
