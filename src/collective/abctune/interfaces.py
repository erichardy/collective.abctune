# -*- coding: utf-8 -*-
"""Module where all interfaces live."""

from collective import dexteritytextindexer
from collective.abctune import _
from plone.autoform import directives as form
from plone.namedfile.field import NamedBlobFile
from plone.namedfile.field import NamedBlobImage
from plone.supermodel import model
from zope import schema
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer


class ICollectiveAbctuneLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


tunearea_title = _(u'The area from which the tune is from')
tunearea_desc = _(u'More detailed origin of the tune, from O: field')
tunecountry_title = u'The origin country of the tune, '
tunecountry_title += u'from first part of O: field'
tunecountry_title = _(tunecountry_title)
score_desc = _(u'The score of the tune as png image')


class Iabctune(Interface):

    dexteritytextindexer.searchable('abc')
    model.primary('abc')
    abc = schema.Text(title=_(u'Tune abc'),
                      description=_(u'The tune in abc format'),)

    dexteritytextindexer.searchable('tunekeys')
    form.omitted('tunekeys')
    tunekeys = schema.List(title=u'keys',
                           description=u'set by abc content',
                           required=False,
                           value_type=schema.TextLine(required=False),
                           )

    dexteritytextindexer.searchable('tunetype')
    form.omitted('tunetype')
    tunetype = schema.TextLine(title=_(u'The type of the tune'),
                               description=_(u'from the field R:'),
                               required=False,
                               )
    # NOTE: as specified in the v2.1 standard, A: field is deprecated
    # so, only O: is used to specified country and areas... separated
    # by ';'
    dexteritytextindexer.searchable('tunearea')
    form.omitted('tunearea')
    tunearea = schema.TextLine(title=tunearea_title,
                               description=tunearea_desc,
                               required=False,
                               )
    dexteritytextindexer.searchable('tunecountry')
    form.omitted('tunecountry')
    tunecountry = schema.TextLine(title=tunecountry_title,
                                  description=_(u'The country'),
                                  required=False,
                                  )

    form.omitted('score')
    score = NamedBlobImage(title=_(u'Score'),
                           description=score_desc,
                           required=False,)

    form.omitted('pdfscore')
    pdfscore = NamedBlobFile(title=_(u'PDF Score'),
                             description=_(u'The score of the tune as PDF'),
                             required=False,
                             )

    form.omitted('midi')
    midi = NamedBlobFile(title=_(u'Midi'),
                         description=_(u'Midi sound of the tune'),
                         required=False,
                         )
    form.omitted('sound')
    sound = NamedBlobFile(title=_(u'sound'),
                          description=_(u'The mp3 sound of the tune'),
                          required=False,
                          )


# @form.default_value(field=Iabctune['abc'])
def abcDefaultValue(data):
    # http://docs.python.org/2.6/whatsnew/2.3.html#date-time-type
    # To get hold of the folder, do: context = data.context
    tune = """
X:1
T:Ashplant, The
%%MIDI chordvol 30
%%MIDI bassvol 30
R:reel
Q:180
P:AAAAA
D:Noel Hill & Tony McMahon: 'I gCnoc na Gra'i
Z:id:hn-reel-285
M:C|
K:Edor
P:A
|:"Em"BE E2 "G"BAGA|"Em"BE E2  "G"G3A|1 "Em"BE E2 BABd|
"G"gedB "D"A2GA:|2  "Em"B3A "Bm"Bd ef|"G"gedB "D"A2GA|
|:"Em"B2eB "Bm"fBeB| "Em"B2ed BAGA|1 "Em"B2eB  "D"f3d|
"Em"efdB "D"A2GA:|2 "Bm"Bd ef  "G"g3a|"G"gedB "D"A2GA||
"""
    return tune
