# -*- coding: utf-8 -*-

from collective.abctune import _
from collective.abctune.interfaces import ITune
from plone import api
from plone.dexterity.browser import add
from plone.dexterity.content import Container
from Products.Five import BrowserView
from z3c.form import button
# from plone.directives import dexterity
from zope.interface import implementer

import logging


logger = logging.getLogger('collective.abctune:tune')


@implementer(ITune)
class tune(Container):
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
    portal_type = 'tune'
    ignoreContext = True
    label = _(u'Add a new tune !')

    def update(self):
        super(add.DefaultAddForm, self).update()

    def updateWidgets(self):
        super(add.DefaultAddForm, self).updateWidgets()

    def handleApply(self, data):
        try:
            tune = self.createAndAdd(data)
            logger.info('ajout 1 tune')
            return tune
        except Exception:
            raise

    @button.buttonAndHandler(_(u'Save this tune'), name='save_this_tune')
    def handleSave(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = _('Please correct errors')
            return
        self.handleApply(data)
        contextURL = self.context.absolute_url()
        self.request.response.redirect(contextURL)

    @button.buttonAndHandler(_(u'Cancel this tune'))
    def handleCancel(self, action):
        data, errors = self.extractData()
        contextURL = self.context.absolute_url()
        self.request.response.redirect(contextURL)

    @button.buttonAndHandler(_(u'save and add abc'))
    def handleAddABC(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = _('Please correct errors')
            return
        tune = self.handleApply(data)
        tuneId = tune.getId()
        addAbc = self.context.absolute_url()
        addAbc += '/' + tuneId + '/++add++abc?title=' + tune.title
        self.request.response.redirect(addAbc)

    @button.buttonAndHandler(_(u'save and add record'))
    def handleRecord(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = _('Please correct errors')
            return
        tune = self.handleApply(data)
        tuneId = tune.getId()
        addRecordd = self.context.absolute_url()
        addRecordd += '/' + tuneId + '/++add++record'
        self.request.response.redirect(addRecordd)


class AddView(add.DefaultAddView):
    form = AddForm
