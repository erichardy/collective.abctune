# -*- coding: utf-8 -*-

from collective.abctune import _
from collective.abctune.interfaces import IABC
from collective.abctune.utils import ABC_ANNOTATIONS_KEYS
from collective.abctune.utils import getCmdOutput
from plone import api
from plone.dexterity.browser import add
from plone.dexterity.content import Item
from Products.Five import BrowserView
from z3c.form import button
from zope.annotation.interfaces import IAnnotations
from zope.annotation.interfaces import IAttributeAnnotatable
# from plone.directives import dexterity
from zope.interface import implementer

import logging


logger = logging.getLogger('collective.abctune:abc')


@implementer(IABC, IAttributeAnnotatable)
class abc(Item):
    """
    IAttributeAnnotatable is used to store outputs and errors generated by
    transforms and other things...
    """
    def getAbcAnnotations(self):
        """
        get transforms output and errors
        """
        annotations = IAnnotations(self)
        outputs = {}
        for k in ABC_ANNOTATIONS_KEYS:
            outputs[k] = getCmdOutput(k, annotations)
        return outputs


class View(BrowserView):

    def abcAutorized(self):
        context = self.context
        perm = api.user.has_permission('Modify Portal Content', obj=context)
        return perm

    def javascript(self):
        auth = self.abcAutorized()
        authjs = u'true'
        if not auth:
            authjs = u'false'

        js = u'<script type="text/javascript">\n'
        js += u'tuneModified = ' + _(u'"The tune was modified... continue ?"')
        js += u';\n'
        js += u'var uuid = "' + api.content.get_uuid(self.context) + '";\n'
        js += u'var auth = ' + authjs + ';\n'
        js += u'</script>'
        # import pdb;pdb.set_trace()
        return js

    def sujbectsStr(self):
        subjects = self.context.subject
        subject_str = ''
        for s in subjects:
            subject_str += s + ', '
        return subject_str.strip(', ')

    def gettTitle(self):
        return self.context.title


class AddForm(add.DefaultAddForm):
    portal_type = 'abc'
    ignoreContext = True
    label = _(u'Add a new tune !')

    def update(self):
        super(add.DefaultAddForm, self).update()

    def updateWidgets(self):
        super(add.DefaultAddForm, self).updateWidgets()

    @button.buttonAndHandler(_(u'Save this abc'), name='save_this_abc')
    def handleApply(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = _('Please correct errors')
            return
        try:
            obj = self.createAndAdd(data)
            logger.info(obj.absolute_url())
            contextURL = self.context.absolute_url()
            self.request.response.redirect(contextURL)
        except Exception:
            raise

    @button.buttonAndHandler(_(u'Cancel this abc'))
    def handleCancel(self, action):
        data, errors = self.extractData()
        # context is the thesis repo
        contextURL = self.context.absolute_url()
        self.request.response.redirect(contextURL)


class AddView(add.DefaultAddView):
    form = AddForm
