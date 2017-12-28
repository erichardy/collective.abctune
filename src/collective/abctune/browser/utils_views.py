# -*- coding: utf-8 -*-

from zope.publisher.browser import BrowserView
from Acquisition import aq_parent
from plone import api
from collective.abctune.interfaces import ITune
import logging


logger = logging.getLogger('collective.abctune:utilsViews ')


def isTune(obj):
    return ITune.providedBy(obj)


def parentTune(context):
    if isTune(context):
        return context
    parent = aq_parent(context)
    plone = api.portal.get()
    while (
        parent is not plone
        and not isTune(parent)
    ):
        parent = aq_parent(parent)
    return parent


class inTune(BrowserView):
    """
    :return: True if context or parent is ``Tune``
    """
    def __call__(self):
        # import pdb;pdb.set_trace()
        if self.context.portal_type == 'Plone Site':
            return False
        intune = (
            self.context.portal_type == 'tune' or
            self.context.aq_parent.portal_type == 'tune')
        return intune


class tuneParentUrl(BrowserView):
    """
    :return: URL of the tune or the parent tune
    """
    def __call__(self):
        if self.context.portal_type == 'Plone Site':
            return None
        if self.context.portal_type == 'tune':
            return self.context.absolute_url()
        if self.context.aq_parent.portal_type == 'tune':
            return self.context.aq_parent.absolute_url()
        return self.context.absolute_url()


class tuneID(BrowserView):
    """
    :return: ID of the tune
    """
    def __call__(self):
        tune = parentTune(self.context)
        return tune.getId()
