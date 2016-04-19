# -*- coding: utf-8 -*-

import logging
from plone import api
from AccessControl import getSecurityManager

# from plone.directives import dexterity
from zope.interface import implements
from plone.dexterity.content import Item

from Products.CMFCore.permissions import ModifyPortalContent

from Products.Five import BrowserView
from collective.abctune.interfaces import Iabctune
from collective.abctune import _

logger = logging.getLogger('collective.abctune')


class abctune(Item):
    implements(Iabctune)


class View(BrowserView):

    def abcAutorized(self):
        context = self.context
        sm = getSecurityManager()
        if not sm.checkPermission(ModifyPortalContent, context):
            return False
        return True

    def javascript(self):
        auth = self.abcAutorized()
        authjs = u'true'
        if not auth:
            authjs = u'false'

        js = u"""<script type="text/javascript">\n"""
        js += u'tuneModified = ' + _(u"'The tune was modified... continue ?'")
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
