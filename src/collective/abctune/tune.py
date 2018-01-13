# -*- coding: utf-8 -*-

from collective.abctune import _
from collective.abctune.utils import sort_by_position
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

tune_obj_types = ['abc', 'record', 'Link']
tune_obj_types.append('Document')
tune_obj_types.append('Image')
tune_obj_types.append('File')


@implementer(ITune)
class tune(Container):

    def getTuneObjectsTypes(self):
        """
        Il serait plus élégant d'obtenir cette liste à partir de celle définie
        dans ``allowed_content_types`` de ``tune.xml`` !
        Mais, la méthode ``allowedContentTypes()`` ne retourne pas les
        éléments dans l'ordre donné dans ``tune.xml``, elle les retourne
        par ordre alphabétique, mais ce n'est pas ce que l'on veut.
        """
        return tune_obj_types

    def getTuneObjects(self):
        """
        :returns: un dictionnaire ayant pour clés les content_types
            de la liste ``tune_obj_types`` s'il y en a qui sont trouvés,
            pour valeur de chaque clé, la liste des éléments du type
            correspondant triée par ordre de positionnement dans le
            container.
        """
        TuneObjects = {}
        for t in tune_obj_types:
            objs = api.content.find(
                portal_type=t,
                context=self,
                )
            TuneObjects[t] = sorted(
                [obj.getObject() for obj in objs],
                sort_by_position
                )
        return TuneObjects

    def getTuneObjectsByType(self, portal_type):
        """
        :returns: un dictionnaire ayant pour clés les content_types
            de la liste ``tune_obj_types`` s'il y en a qui sont trouvés,
            pour valeur de chaque clé, la liste des éléments du type
            correspondant triée par ordre de positionnement dans le
            container.
        """
        objs = api.content.find(
            portal_type=portal_type,
            context=self,
            )
        return sorted(
            [obj.getObject() for obj in objs],
            sort_by_position
            )

    def getDocumentAndPosition(self):
        """
        :returns: a tuple : first element is a document, second, its position
            in the folder. Returns ``(None, None)`` if no document
        """
        brains = api.content.find(
            context=self,)
        objs = sorted(
            [obj.getObject() for obj in brains],
            sort_by_position
            )
        # import pdb;pdb.set_trace()
        docs = [doc for doc in objs
                if doc.portal_type == 'Document']
        if not docs:
            # no document
            return (None, None)
        return (docs[0], objs.index(docs[0]))


class View(BrowserView):

    def abcAutorized(self):
        context = self.context
        current = api.user.get_current()
        username = current.get('username')
        perm = api.user.has_permission(
            'Modify portal content',
            username=username,
            obj=context)
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
