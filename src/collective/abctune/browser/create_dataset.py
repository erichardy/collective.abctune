# -*- coding: utf-8 -*-
import logging
from os.path import abspath, dirname

from Products.Five import BrowserView
from plone import api

PREFIX = abspath(dirname(__file__))
logger = logging.getLogger('collective.abctune:create_dataset')

congress = """X:1
T: The Congress
%%MIDI chordvol 30
%%MIDI bassvol 30
C:http://www.youtube.com/watch?v=_hjHWabvaho
R: reel
Q: 160
P:A
M: 4/4
L: 1/8
K: Ador
P:A
|:"Am"eAAG A2Bd|eaaf "Em"gedg|"Am"eA (3AAA eA (3AAA|"G"BGGA "Em"Bdeg|
"Am"eAAG A2 Bd|eaaf "Em"gedB|"C"cBcd "Em"eged|"C"cABG "Am"A2 Bd:|
|:"Am"eaag a3 g|eaag "G"egdg|"Em"egdg "G"egdg|"Am"eaaf "Em"gedg|
"Am"eaag a3 g|eaaf "G"gedB|"C"cBcd eged|"G"cABG "Am"A2Bd:|
"""

einars_mazurka = """X:1
T:Einar's Mazurka
%%MIDI chordvol 30
%%MIDI bassvol 30
R:reel
Q:120
P:ZA
D:Trad Su\`ede
Z:id:hn-reel-285
M:3/4
K:F
P:Z
|z4 (3DFA|\
P:A
|:d2 A2 B>c|B>A G>B A>B|A>G F>E E2|D>^C D>E (3DFA|
d2 A2 B>c|B>A G>B A>B|A>G F>E D^C|1 D4 (3DFA:|2 D6|
|:A2 F3 A|G2 E3 F|G2 G>F E>G|F>E D>E F>G|
A2 F3 A|G2 E3 F|G2 GF EF|1 D6:|2 D4 (3DFA|
"""


class createDataSet(BrowserView):

    def __call__(self):
        self.portal = api.portal.get()
        purge = self.request.form.get('purge')
        if purge:
            self.purgeDataSet()
            return
        if self.portal.get('my-tune'):
            logger.info('Tune already exists !!!')
            return
        self.createFolders()
        self.tune = self.createTune(self.portal)
        self.abc1 = self.createAbc(
            self.tune,
            title=u'Congress',
            abc=congress)
        self.abc2 = self.createAbc(
            self.tune,
            title=u'Einars\'s Mazurka',
            abc=einars_mazurka)
        objs = [self.tune, self.abc1, self.abc2,
                self.fold, self.sfold1, self.sfold2, self.ssfold1]
        for obj in objs:
            self.publish(obj)
        self.request.response.redirect(self.tune.absolute_url())

    def createTune(self, loc):
        tune = api.content.create(
            container=loc,
            type='tune',
            title=u'my tune',
            )
        return tune

    def createAbc(self, tune, title, abc):
        return api.content.create(
            container=tune,
            type='abc',
            title=title,
            abc=abc)

    def publish(self, obj):
        api.content.transition(obj=obj, transition='publish')

    def createFolders(self):
        self.fold = api.content.create(
            container=self.portal,
            type='Folder',
            title=u'folder1'
            )
        self.sfold1 = api.content.create(
            container=self.fold,
            type='Folder',
            title=u'sfolder1'
            )
        self.sfold2 = api.content.create(
            container=self.fold,
            type='Folder',
            title=u'sfolder1'
            )
        self.ssfold1 = api.content.create(
            container=self.sfold1,
            type='Folder',
            title=u'ss folder1'
            )

    def purgeDataSet(self):
        logger.info('Purge dataset !!!')
        try:
            tune = self.portal.get('my-tune')
            api.content.delete(obj=tune)
        except Exception:
            logger.info('No tune to purge !!!')
            pass
        try:
            fold = self.portal.get('folder1')
            api.content.delete(obj=fold)
        except Exception:
            logger.info('No folder to purge !!!')
            pass
        self.request.response.redirect(self.portal.absolute_url())
