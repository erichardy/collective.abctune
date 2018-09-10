# -*- coding: utf-8 -*-

from plone.app.contenttypes.browser.collection import CollectionView
from plone.protect.interfaces import IDisableCSRFProtection
from zope.interface import alsoProvides
import logging


logger = logging.getLogger('collective.abctune:tunesListCollection ')


class tunesListCollection(CollectionView):
    """
    code from plone.app.contenttypes.browser.collection.CollectionView
    """
    """
    def __call__(self):
        alsoProvides(self.request, IDisableCSRFProtection)
    """

    def results(self, **kwargs):
        """Return a content listing based result set with results from the
        collection query.

        :param **kwargs: Any keyword argument, which can be used for catalog
                         queries.
        :type  **kwargs: keyword argument

        :returns: plone.app.contentlisting based result set.
        :rtype: ``plone.app.contentlisting.interfaces.IContentListing`` based
                sequence.
        """
        alsoProvides(self.request, IDisableCSRFProtection)
        # Extra filter
        contentFilter = self.request.get('contentFilter', {})
        contentFilter.update(kwargs.get('contentFilter', {}))
        kwargs.setdefault('custom_query', contentFilter)
        kwargs.setdefault('batch', True)
        kwargs.setdefault('b_size', self.b_size)
        kwargs.setdefault('b_start', self.b_start)

        results = self.collection_behavior.results(**kwargs)
        # here, we return a list of objects.
        return [obj.getObject() for obj in results]
