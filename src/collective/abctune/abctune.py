# -*- coding: utf-8 -*-

from collective.abctune import _
from collective.abctune.interfaces import Iabctune
from plone import api
from plone.dexterity.content import Item
from Products.Five import BrowserView
# from plone.directives import dexterity
from zope.interface import implementer

import logging


logger = logging.getLogger('collective.abctune')


@implementer(Iabctune)
class abctune(Item):
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

# for addForm, see : https://pypi.python.org/pypi/plone.directives.form/1.1
# class Add(dexterity.AddForm):
#    grok.name('abctune')
#    grok.template('addAbcTune')
