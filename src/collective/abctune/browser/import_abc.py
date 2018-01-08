# -*- coding: utf-8 -*-

# from datetime import datetime
from plone import api
# from plone.namedfile.field import NamedBlobFile
from plone.namedfile.field import NamedFile
# from plone.formwidget.namedfile import NamedFile
from z3c.form import button
import logging
from zope import interface
from z3c.form import form
from z3c.form import field
from zope.component import getUtility
from plone.i18n.normalizer.interfaces import INormalizer
from collective.abctune.utils import removeNonAscii
from collective.abctune import _

logger = logging.getLogger('collective.abctune:IMPORT')


class IImportABC(interface.Interface):
    data = NamedFile(title=_(u'file containing ABC tunes to import'))


class importAbcFile(form.Form):
    fields = field.Fields(IImportABC)
    ignoreContext = True

    label = _(u'import ABC file...')
    description = _(u'the file must contain only abc tunes well formated')

    def cleanup(self, tune):
        returned = []
        for line in tune:
            if line[:12] != '%ABCKeyWord:':
                returned.append(line)
        return returned

    def getTuneId(self, tune):
        """returns an Id from the title tune"""
        context = self.context
        normalizer = getUtility(INormalizer)
        for tuneLine in tune:
            if tuneLine[:2] == 'T:':
                title = tuneLine.split(':')[1]
                tuneId = normalizer.normalize(title, locale='fr')
                # logger.info("getTuneId:" + tuneLine + ':' + tuneId)
                idOrigine = tuneId
                i = 1
                while tuneId in context.keys():
                    tuneId = idOrigine + '-' + str(i).zfill(3)
                    i += 1
                return tuneId
        return 'collective.abctune.NoId'

    def getTuneTitle(self, tune):
        """returns a title  from the title tune"""
        for tuneLine in tune:
            if tuneLine[:2] == 'T:':
                title = tuneLine.split(':')[1]
                return title
        return 'collective.abctune.NoTitle'

    def getSubject(self, tune):
        subjects = []
        for line in tune:
            if line[:12] == '%ABCKeyWord:':
                subject = line.split(':')[1]
                subjects.append(subject)
        return subjects

    def createTune(self,
                   newtune=None,
                   tuneId=None,
                   tuneTitle=None,
                   tuneSubject=None):
        tune = api.content.create(
            container=self.context,
            type='tune',
            title=tuneTitle,
            subject=tuneSubject)
        tune.reindexObject()
        logger.info('Tune created: ' + tune.title)
        abc = api.content.create(
            container=tune,
            type='abc',
            title=tuneTitle,
            abc=newtune)
        abc.reindexObject()
        logger.info('ABC created: ' + abc.title)
        return (tune, abc)

    def processABC(self, data):
        data = removeNonAscii(data)
        rawtunes = data.split('X:')
        for rawtune in rawtunes:
            # logger.info(line)
            # logger.info('-----------')
            tune = rawtune.split('\n')[1:]
            tune.insert(0, 'X:1')
            newtune = ('\n').join(self.cleanup(tune))
            tuneId = self.getTuneId(tune)
            tuneTitle = self.getTuneTitle(tune)
            tuneSubject = self.getSubject(tune)
            if tuneId != 'collective.abctune.NoId':
                self.createTune(newtune=newtune,
                                tuneId=tuneId,
                                tuneTitle=tuneTitle,
                                tuneSubject=tuneSubject)

    @button.buttonAndHandler(_(u'import tunes from this file'))
    def handleApply(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = self.formErrorsMessage
            return

        dataABC = data['data'].data
        self.processABC(dataABC)
        self.status = 'Thank you very much!'
        self.request.response.redirect(self.context.absolute_url())

    @button.buttonAndHandler(_(u'Cancel import'))
    def handleCancel(self, action):
        """User cancelled. Redirect back to the front page.
        """
        self.request.response.redirect(self.context.absolute_url())
