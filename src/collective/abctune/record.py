# -*- coding: utf-8 -*-

from collective.abctune import _
from collective.abctune.interfaces import IRecord
from plone import api
from plone.dexterity.browser import add
from plone.dexterity.content import Item
from Products.Five import BrowserView
from z3c.form import button
# from plone.directives import dexterity
from zope.interface import implementer

import logging


logger = logging.getLogger('collective.abctune:record')


@implementer(IRecord)
class record(Item):
    pass


class View(BrowserView):

    def abcAutorized(self):
        context = self.context
        current = api.user.get_current()
        perm = api.user.has_permission(
            'ModifyPortalContent',
            username=current.getProperty('username'),
            obj=context)
        logger.info(u'Methode a verifier !!!!!!! : ' + str(perm))
        logger.info(u'Donc elle retourne TJRS FALSE')
        return False

    def sujbectsStr(self):
        subjects = self.context.subject
        subject_str = ''
        for s in subjects:
            subject_str += s + ', '
        return subject_str.strip(', ')

    def gettTitle(self):
        return self.context.title

    def tags(self):
        return u''


class AddForm(add.DefaultAddForm):
    portal_type = 'record'
    ignoreContext = True
    label = _(u'Add a new record !')

    def update(self):
        super(add.DefaultAddForm, self).update()
        title = self.request.form.get('title')
        if title:
            self.widgets['title'].value = title

    def updateWidgets(self):
        super(add.DefaultAddForm, self).updateWidgets()

    @button.buttonAndHandler(_(u'Save this record'), name='save_this_record')
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

    @button.buttonAndHandler(_(u'Cancel this record'))
    def handleCancel(self, action):
        data, errors = self.extractData()
        # context is the thesis repo
        contextURL = self.context.absolute_url()
        self.request.response.redirect(contextURL)


class AddView(add.DefaultAddView):
    form = AddForm
