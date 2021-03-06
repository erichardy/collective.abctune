
module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            
            "abctune": {
                files: [
                    {"/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css": ["/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor.less", "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "abctune-compiled.min.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "abctune-abcjs": "'abcjs_editor.less'",
                      "abctune-main": "'abctune.less'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-collective-z3cform-datagridfield": "'datagridfield.css'",
                      "resource-plone-app-event-event-css": "'eaa97eadf0844d1fba5b44cc3533d5fa.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier-dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "layouts-editor": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css": ["/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css/layouts-editor.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "layouts-editor.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "abctune-abcjs": "'abcjs_editor.less'",
                      "abctune-main": "'abctune.less'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-collective-z3cform-datagridfield": "'datagridfield.css'",
                      "resource-plone-app-event-event-css": "'eaa97eadf0844d1fba5b44cc3533d5fa.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier-dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "mosaic": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css": ["/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css/mosaic.pattern.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-mosaic.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "abctune-abcjs": "'abcjs_editor.less'",
                      "abctune-main": "'abctune.less'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-collective-z3cform-datagridfield": "'datagridfield.css'",
                      "resource-plone-app-event-event-css": "'eaa97eadf0844d1fba5b44cc3533d5fa.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier-dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "plone-logged-in": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css": ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-logged-in-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "abctune-abcjs": "'abcjs_editor.less'",
                      "abctune-main": "'abctune.less'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-collective-z3cform-datagridfield": "'datagridfield.css'",
                      "resource-plone-app-event-event-css": "'eaa97eadf0844d1fba5b44cc3533d5fa.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier-dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "plone": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css": ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "abctune-abcjs": "'abcjs_editor.less'",
                      "abctune-main": "'abctune.less'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-collective-z3cform-datagridfield": "'datagridfield.css'",
                      "resource-plone-app-event-event-css": "'eaa97eadf0844d1fba5b44cc3533d5fa.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier-dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "resourceregistry": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css": ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "resourceregistry-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "abctune-abcjs": "'abcjs_editor.less'",
                      "abctune-main": "'abctune.less'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-collective-z3cform-datagridfield": "'datagridfield.css'",
                      "resource-plone-app-event-event-css": "'eaa97eadf0844d1fba5b44cc3533d5fa.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier-dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "thememapper": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css": ["/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "thememapper-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "abctune-abcjs": "'abcjs_editor.less'",
                      "abctune-main": "'abctune.less'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-collective-z3cform-datagridfield": "'datagridfield.css'",
                      "resource-plone-app-event-event-css": "'eaa97eadf0844d1fba5b44cc3533d5fa.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier-dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "webcouturier-dropdownmenu": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css": ["/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/dropdown.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "webcouturier.dropdownmenu-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "abctune-abcjs": "'abcjs_editor.less'",
                      "abctune-main": "'abctune.less'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-collective-z3cform-datagridfield": "'datagridfield.css'",
                      "resource-plone-app-event-event-css": "'eaa97eadf0844d1fba5b44cc3533d5fa.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier-dropdownmenu": "'dropdown.less'",

                    }
                }
            }

        },
        requirejs: {
            
            "abctune-abcjs": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.5-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/c581b26d34a74fe2ac5dd53e65f937d1", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "abctune-main": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "abctune-main-url": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/b668def8ff5f464b9d8cd8e09c478eaa", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "resource-collective-z3cform-datagridfield": "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static/datagridfield", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cbcf4d16c38c4d1db9ee7a4607626465", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "abctune-abcjs": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "abctune-main": {}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "resource-collective-z3cform-datagridfield": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "abctune-abcjs": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-abcjs-compiled.js',
                    optimize: "none"
                }
            },

            "abctune-main": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.5-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/c581b26d34a74fe2ac5dd53e65f937d1", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "abctune-main": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "abctune-main-url": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/b668def8ff5f464b9d8cd8e09c478eaa", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "resource-collective-z3cform-datagridfield": "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static/datagridfield", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cbcf4d16c38c4d1db9ee7a4607626465", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "abctune-abcjs": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "abctune-main": {}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "resource-collective-z3cform-datagridfield": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "abctune-abcjs": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main-compiled.js',
                    optimize: "none"
                }
            },

            "layouts-editor": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "empty:", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n", "underscore": "empty:", "pat-logger": "empty:", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "empty:", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.5-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/c581b26d34a74fe2ac5dd53e65f937d1", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "abctune-main": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "empty:", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "abctune-main-url": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/b668def8ff5f464b9d8cd8e09c478eaa", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "resource-collective-z3cform-datagridfield": "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static/datagridfield", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cbcf4d16c38c4d1db9ee7a4607626465", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "empty:", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "abctune-abcjs": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "abctune-main": {}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "resource-collective-z3cform-datagridfield": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "abctune-abcjs": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor-compiled.js',
                    optimize: "none"
                }
            },

            "mosaic": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "empty:", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "empty:", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n", "underscore": "empty:", "pat-logger": "empty:", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "empty:", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "empty:", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.5-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/c581b26d34a74fe2ac5dd53e65f937d1", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "abctune-main": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "empty:", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "abctune-main-url": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/b668def8ff5f464b9d8cd8e09c478eaa", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "empty:", "resource-collective-z3cform-datagridfield": "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static/datagridfield", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cbcf4d16c38c4d1db9ee7a4607626465", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "empty:", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "abctune-abcjs": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "abctune-main": {}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "resource-collective-z3cform-datagridfield": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "abctune-abcjs": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic-compiled.js',
                    optimize: "none"
                }
            },

            "plone-logged-in": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "empty:", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "empty:", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "empty:", "mockup-i18n": "empty:", "underscore": "empty:", "pat-logger": "empty:", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "empty:", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "empty:", "jquery.cookie": "empty:", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "empty:", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.5-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/c581b26d34a74fe2ac5dd53e65f937d1", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "abctune-main": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "empty:", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "empty:", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "abctune-main-url": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", "jquery.form": "empty:", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "empty:", "bootstrap-dropdown": "empty:", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "empty:", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/b668def8ff5f464b9d8cd8e09c478eaa", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "empty:", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "empty:", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "empty:", "mockup-patterns-moment": "empty:", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "empty:", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "resource-collective-z3cform-datagridfield": "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static/datagridfield", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "empty:", "mockup-patterns-autotoc": "empty:", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "empty:", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "empty:", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "empty:", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cbcf4d16c38c4d1db9ee7a4607626465", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "empty:", "abctune-abcjs": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "abctune-main": {}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "resource-collective-z3cform-datagridfield": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "abctune-abcjs": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js',
                    optimize: "none"
                }
            },

            "plone": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.5-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/c581b26d34a74fe2ac5dd53e65f937d1", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "abctune-main": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "abctune-main-url": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/b668def8ff5f464b9d8cd8e09c478eaa", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "resource-collective-z3cform-datagridfield": "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static/datagridfield", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cbcf4d16c38c4d1db9ee7a4607626465", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "abctune-abcjs": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "abctune-main": {}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "resource-collective-z3cform-datagridfield": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "abctune-abcjs": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.js',
                    optimize: "none"
                }
            },

            "resourceregistry": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.5-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/c581b26d34a74fe2ac5dd53e65f937d1", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "abctune-main": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "abctune-main-url": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/b668def8ff5f464b9d8cd8e09c478eaa", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "resource-collective-z3cform-datagridfield": "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static/datagridfield", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cbcf4d16c38c4d1db9ee7a4607626465", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "abctune-abcjs": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "abctune-main": {}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "resource-collective-z3cform-datagridfield": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "abctune-abcjs": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js',
                    optimize: "none"
                }
            },

            "thememapper": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.5-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/c581b26d34a74fe2ac5dd53e65f937d1", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "abctune-main": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "abctune-main-url": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/b668def8ff5f464b9d8cd8e09c478eaa", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "resource-collective-z3cform-datagridfield": "/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static/datagridfield", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cbcf4d16c38c4d1db9ee7a4607626465", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "abctune-abcjs": "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "abctune-main": {}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "resource-collective-z3cform-datagridfield": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "abctune-abcjs": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js',
                    optimize: "none"
                }
            },

        },
        sed: {
            
    sed0: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed1: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed2: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed3: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed4: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed5: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed6: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed7: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed8: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed9: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed10: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed11: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed12: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed13: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed14: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed15: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed16: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed17: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed18: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed19: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed20: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: 'src/collective/abctune/static',
      replacement: '../++plone++abctune',
    },

    sed21: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed22: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed23: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed24: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed25: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed26: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed27: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed28: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed29: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed30: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed31: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed32: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed33: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static',
      replacement: '../++resource++collective.z3cform.datagridfield',
    },

    sed34: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed35: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/collective.abctune',
      replacement: '',
    },

    sed36: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed37: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed38: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed39: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed40: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed41: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed42: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed43: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed44: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed45: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed46: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed47: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed48: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed49: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed50: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed51: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed52: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed53: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed54: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed55: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed56: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: 'src/collective/abctune/static',
      replacement: '../++plone++abctune',
    },

    sed57: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed58: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed59: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed60: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed61: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed62: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed63: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed64: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed65: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed66: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed67: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed68: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed69: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static',
      replacement: '../++resource++collective.z3cform.datagridfield',
    },

    sed70: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed71: {
      path: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/collective.abctune',
      replacement: '',
    },

    sed72: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../../++resource++mockup/relateditems',
    },

    sed73: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../../++plone++static/components/select2',
    },

    sed74: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../../++plone++static/components/jqtree',
    },

    sed75: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../../++resource++mockup/pickadate',
    },

    sed76: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../../++resource++mockup/structure/less',
    },

    sed77: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../../++resource++mockup/upload/less',
    },

    sed78: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed79: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed80: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../../++plone++static/components/dropzone/dist',
    },

    sed81: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../../++resource++mockup/resourceregistry',
    },

    sed82: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal',
      replacement: '../../++resource++mockup/modal',
    },

    sed83: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../../++resource++mockup/markspeciallinks',
    },

    sed84: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static',
      replacement: '../../++plone++dropdown',
    },

    sed85: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring',
      replacement: '../../++resource++mockup/querystring',
    },

    sed86: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../../++resource++mockup/autotoc',
    },

    sed87: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../../++plone++static/components/pickadate/lib/themes',
    },

    sed88: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree',
      replacement: '../../++resource++mockup/tree',
    },

    sed89: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less',
      replacement: '../../++resource++mockupless',
    },

    sed90: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2',
      replacement: '../../++resource++mockup/select2',
    },

    sed91: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../../++resource++mockup/tinymce/less',
    },

    sed92: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: 'src/collective/abctune/static',
      replacement: '../../++plone++abctune',
    },

    sed93: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../../++resource++mockup/livesearch',
    },

    sed94: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../../++resource++plone.app.theming',
    },

    sed95: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../../++plone++mosaic/css',
    },

    sed96: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed97: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: 'temp_resources',
      replacement: '../../++resource++plone.app.event',
    },

    sed98: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../../++plone++static/components/bootstrap/less',
    },

    sed99: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static',
      replacement: '../../++plone++static',
    },

    sed100: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../../++resource++mockup/recurrence',
    },

    sed101: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../../++plone++static/patterns/toolbar/src/css',
    },

    sed102: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed103: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../../++resource++mockup/tooltip',
    },

    sed104: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../../++resource++mockup/filemanager',
    },

    sed105: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static',
      replacement: '../../++resource++collective.z3cform.datagridfield',
    },

    sed106: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../../++resource++mockup/thememapper',
    },

    sed107: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/collective.abctune',
      replacement: '',
    },

    sed108: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../../++resource++mockup/relateditems',
    },

    sed109: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../../++plone++static/components/select2',
    },

    sed110: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../../++plone++static/components/jqtree',
    },

    sed111: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../../++resource++mockup/pickadate',
    },

    sed112: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../../++resource++mockup/structure/less',
    },

    sed113: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../../++resource++mockup/upload/less',
    },

    sed114: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed115: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed116: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../../++plone++static/components/dropzone/dist',
    },

    sed117: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../../++resource++mockup/resourceregistry',
    },

    sed118: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal',
      replacement: '../../++resource++mockup/modal',
    },

    sed119: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../../++resource++mockup/markspeciallinks',
    },

    sed120: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static',
      replacement: '../../++plone++dropdown',
    },

    sed121: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring',
      replacement: '../../++resource++mockup/querystring',
    },

    sed122: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../../++resource++mockup/autotoc',
    },

    sed123: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../../++plone++static/components/pickadate/lib/themes',
    },

    sed124: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree',
      replacement: '../../++resource++mockup/tree',
    },

    sed125: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less',
      replacement: '../../++resource++mockupless',
    },

    sed126: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2',
      replacement: '../../++resource++mockup/select2',
    },

    sed127: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../../++resource++mockup/tinymce/less',
    },

    sed128: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: 'src/collective/abctune/static',
      replacement: '../../++plone++abctune',
    },

    sed129: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../../++resource++mockup/livesearch',
    },

    sed130: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../../++resource++plone.app.theming',
    },

    sed131: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../../++plone++mosaic/css',
    },

    sed132: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed133: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: 'temp_resources',
      replacement: '../../++resource++plone.app.event',
    },

    sed134: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../../++plone++static/components/bootstrap/less',
    },

    sed135: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static',
      replacement: '../../++plone++static',
    },

    sed136: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../../++resource++mockup/recurrence',
    },

    sed137: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../../++plone++static/patterns/toolbar/src/css',
    },

    sed138: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed139: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../../++resource++mockup/tooltip',
    },

    sed140: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../../++resource++mockup/filemanager',
    },

    sed141: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static',
      replacement: '../../++resource++collective.z3cform.datagridfield',
    },

    sed142: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../../++resource++mockup/thememapper',
    },

    sed143: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/collective.abctune',
      replacement: '',
    },

    sed144: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed145: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed146: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed147: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed148: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed149: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed150: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed151: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed152: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed153: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed154: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed155: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed156: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed157: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed158: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed159: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed160: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed161: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed162: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed163: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed164: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/collective/abctune/static',
      replacement: '../++plone++abctune',
    },

    sed165: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed166: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed167: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed168: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed169: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed170: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed171: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed172: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed173: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed174: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed175: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed176: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed177: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static',
      replacement: '../++resource++collective.z3cform.datagridfield',
    },

    sed178: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed179: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/collective.abctune',
      replacement: '',
    },

    sed180: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed181: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed182: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed183: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed184: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed185: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed186: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed187: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed188: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed189: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed190: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed191: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed192: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed193: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed194: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed195: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed196: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed197: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed198: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed199: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed200: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/collective/abctune/static',
      replacement: '../++plone++abctune',
    },

    sed201: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed202: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed203: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed204: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed205: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed206: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed207: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed208: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed209: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed210: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed211: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed212: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed213: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static',
      replacement: '../++resource++collective.z3cform.datagridfield',
    },

    sed214: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed215: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/collective.abctune',
      replacement: '',
    },

    sed216: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed217: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed218: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed219: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed220: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed221: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed222: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed223: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed224: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed225: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed226: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed227: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed228: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed229: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed230: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed231: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed232: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed233: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed234: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed235: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed236: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/collective/abctune/static',
      replacement: '../++plone++abctune',
    },

    sed237: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed238: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed239: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed240: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed241: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed242: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed243: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed244: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed245: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed246: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed247: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed248: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed249: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static',
      replacement: '../++resource++collective.z3cform.datagridfield',
    },

    sed250: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed251: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/collective.abctune',
      replacement: '',
    },

    sed252: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed253: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed254: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed255: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed256: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed257: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed258: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed259: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed260: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed261: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed262: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed263: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed264: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed265: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed266: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed267: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed268: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed269: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed270: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed271: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed272: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/collective/abctune/static',
      replacement: '../++plone++abctune',
    },

    sed273: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed274: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed275: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed276: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed277: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed278: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed279: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed280: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed281: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed282: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed283: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed284: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed285: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static',
      replacement: '../++resource++collective.z3cform.datagridfield',
    },

    sed286: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed287: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/collective.abctune',
      replacement: '',
    },

    sed288: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed289: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed290: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed291: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed292: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed293: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed294: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed295: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed296: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed297: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed298: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed299: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed300: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed301: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed302: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed303: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed304: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed305: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed306: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed307: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed308: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: 'src/collective/abctune/static',
      replacement: '../++plone++abctune',
    },

    sed309: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed310: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed311: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed312: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed313: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed314: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed315: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed316: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed317: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed318: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed319: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed320: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed321: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/collective.z3cform.datagridfield-1.1-py2.7.egg/collective/z3cform/datagridfield/static',
      replacement: '../++resource++collective.z3cform.datagridfield',
    },

    sed322: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.7-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed323: {
      path: '/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/collective.abctune',
      replacement: '',
    },

        },
        uglify: {
            
        "abctune": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-compiled.js': ["/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-abcjs-compiled.js", "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main-compiled.js"]
          }
        },

        "layouts-editor": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.js': ["/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor-compiled.js"]
          }
        },

        "mosaic": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.js': ["/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic-compiled.js"]
          }
        },

        "plone-logged-in": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js': ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js"]
          }
        },

        "plone": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.min.js': ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-compiled.js"]
          }
        },

        "resourceregistry": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.min.js': ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js"]
          }
        },

        "thememapper": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js': ["/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js"]
          }
        },

        },
        watch: {
            scripts: {
                files: ["/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor_3.1.2-min.js", "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abcjs_editor.less", "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune-main.js", "/Volumes/SSD/Dev/collective.abctune/src/collective/abctune/static/abctune.less", "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor.js", "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css/layouts-editor.less", "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern.js", "/Volumes/SSD/Dev/eggs/plone.app.mosaic-2.0rc8-py2.7.egg/plone/app/mosaic/browser/static/css/mosaic.pattern.less", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone.js", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/plone.less", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry.js", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.8-py2.7.egg/Products/CMFPlone/static/resourceregistry.less", "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper.js", "/Volumes/SSD/Dev/eggs/plone.app.theming-1.3.6-py2.7.egg/plone/app/theming/browser/resources/thememapper.less", "/Volumes/SSD/Dev/eggs/webcouturier.dropdownmenu-3.0.1-py2.7.egg/webcouturier/dropdownmenu/browser/static/dropdown.less"],
                tasks: ['requirejs', 'less', 'sed', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sed');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compile-all', ['requirejs', 'less', 'sed', 'uglify']);
    
grunt.registerTask('compile-abctune',["requirejs:abctune-abcjs","requirejs:abctune-main", 'less:abctune', 'sed:sed0', 'sed:sed1', 'sed:sed2', 'sed:sed3', 'sed:sed4', 'sed:sed5', 'sed:sed6', 'sed:sed7', 'sed:sed8', 'sed:sed9', 'sed:sed10', 'sed:sed11', 'sed:sed12', 'sed:sed13', 'sed:sed14', 'sed:sed15', 'sed:sed16', 'sed:sed17', 'sed:sed18', 'sed:sed19', 'sed:sed20', 'sed:sed21', 'sed:sed22', 'sed:sed23', 'sed:sed24', 'sed:sed25', 'sed:sed26', 'sed:sed27', 'sed:sed28', 'sed:sed29', 'sed:sed30', 'sed:sed31', 'sed:sed32', 'sed:sed33', 'sed:sed34', 'sed:sed35', 'sed:sed36', 'sed:sed37', 'sed:sed38', 'sed:sed39', 'sed:sed40', 'sed:sed41', 'sed:sed42', 'sed:sed43', 'sed:sed44', 'sed:sed45', 'sed:sed46', 'sed:sed47', 'sed:sed48', 'sed:sed49', 'sed:sed50', 'sed:sed51', 'sed:sed52', 'sed:sed53', 'sed:sed54', 'sed:sed55', 'sed:sed56', 'sed:sed57', 'sed:sed58', 'sed:sed59', 'sed:sed60', 'sed:sed61', 'sed:sed62', 'sed:sed63', 'sed:sed64', 'sed:sed65', 'sed:sed66', 'sed:sed67', 'sed:sed68', 'sed:sed69', 'sed:sed70', 'sed:sed71', 'uglify:abctune']);
grunt.registerTask('compile-layouts-editor',["requirejs:layouts-editor", 'less:layouts-editor', 'sed:sed72', 'sed:sed73', 'sed:sed74', 'sed:sed75', 'sed:sed76', 'sed:sed77', 'sed:sed78', 'sed:sed79', 'sed:sed80', 'sed:sed81', 'sed:sed82', 'sed:sed83', 'sed:sed84', 'sed:sed85', 'sed:sed86', 'sed:sed87', 'sed:sed88', 'sed:sed89', 'sed:sed90', 'sed:sed91', 'sed:sed92', 'sed:sed93', 'sed:sed94', 'sed:sed95', 'sed:sed96', 'sed:sed97', 'sed:sed98', 'sed:sed99', 'sed:sed100', 'sed:sed101', 'sed:sed102', 'sed:sed103', 'sed:sed104', 'sed:sed105', 'sed:sed106', 'sed:sed107', 'uglify:layouts-editor']);
grunt.registerTask('compile-mosaic',["requirejs:mosaic", 'less:mosaic', 'sed:sed108', 'sed:sed109', 'sed:sed110', 'sed:sed111', 'sed:sed112', 'sed:sed113', 'sed:sed114', 'sed:sed115', 'sed:sed116', 'sed:sed117', 'sed:sed118', 'sed:sed119', 'sed:sed120', 'sed:sed121', 'sed:sed122', 'sed:sed123', 'sed:sed124', 'sed:sed125', 'sed:sed126', 'sed:sed127', 'sed:sed128', 'sed:sed129', 'sed:sed130', 'sed:sed131', 'sed:sed132', 'sed:sed133', 'sed:sed134', 'sed:sed135', 'sed:sed136', 'sed:sed137', 'sed:sed138', 'sed:sed139', 'sed:sed140', 'sed:sed141', 'sed:sed142', 'sed:sed143', 'uglify:mosaic']);
grunt.registerTask('compile-plone-logged-in',["requirejs:plone-logged-in", 'less:plone-logged-in', 'sed:sed144', 'sed:sed145', 'sed:sed146', 'sed:sed147', 'sed:sed148', 'sed:sed149', 'sed:sed150', 'sed:sed151', 'sed:sed152', 'sed:sed153', 'sed:sed154', 'sed:sed155', 'sed:sed156', 'sed:sed157', 'sed:sed158', 'sed:sed159', 'sed:sed160', 'sed:sed161', 'sed:sed162', 'sed:sed163', 'sed:sed164', 'sed:sed165', 'sed:sed166', 'sed:sed167', 'sed:sed168', 'sed:sed169', 'sed:sed170', 'sed:sed171', 'sed:sed172', 'sed:sed173', 'sed:sed174', 'sed:sed175', 'sed:sed176', 'sed:sed177', 'sed:sed178', 'sed:sed179', 'uglify:plone-logged-in']);
grunt.registerTask('compile-plone',["requirejs:plone", 'less:plone', 'sed:sed180', 'sed:sed181', 'sed:sed182', 'sed:sed183', 'sed:sed184', 'sed:sed185', 'sed:sed186', 'sed:sed187', 'sed:sed188', 'sed:sed189', 'sed:sed190', 'sed:sed191', 'sed:sed192', 'sed:sed193', 'sed:sed194', 'sed:sed195', 'sed:sed196', 'sed:sed197', 'sed:sed198', 'sed:sed199', 'sed:sed200', 'sed:sed201', 'sed:sed202', 'sed:sed203', 'sed:sed204', 'sed:sed205', 'sed:sed206', 'sed:sed207', 'sed:sed208', 'sed:sed209', 'sed:sed210', 'sed:sed211', 'sed:sed212', 'sed:sed213', 'sed:sed214', 'sed:sed215', 'uglify:plone']);
grunt.registerTask('compile-resourceregistry',["requirejs:resourceregistry", 'less:resourceregistry', 'sed:sed216', 'sed:sed217', 'sed:sed218', 'sed:sed219', 'sed:sed220', 'sed:sed221', 'sed:sed222', 'sed:sed223', 'sed:sed224', 'sed:sed225', 'sed:sed226', 'sed:sed227', 'sed:sed228', 'sed:sed229', 'sed:sed230', 'sed:sed231', 'sed:sed232', 'sed:sed233', 'sed:sed234', 'sed:sed235', 'sed:sed236', 'sed:sed237', 'sed:sed238', 'sed:sed239', 'sed:sed240', 'sed:sed241', 'sed:sed242', 'sed:sed243', 'sed:sed244', 'sed:sed245', 'sed:sed246', 'sed:sed247', 'sed:sed248', 'sed:sed249', 'sed:sed250', 'sed:sed251', 'uglify:resourceregistry']);
grunt.registerTask('compile-thememapper',["requirejs:thememapper", 'less:thememapper', 'sed:sed252', 'sed:sed253', 'sed:sed254', 'sed:sed255', 'sed:sed256', 'sed:sed257', 'sed:sed258', 'sed:sed259', 'sed:sed260', 'sed:sed261', 'sed:sed262', 'sed:sed263', 'sed:sed264', 'sed:sed265', 'sed:sed266', 'sed:sed267', 'sed:sed268', 'sed:sed269', 'sed:sed270', 'sed:sed271', 'sed:sed272', 'sed:sed273', 'sed:sed274', 'sed:sed275', 'sed:sed276', 'sed:sed277', 'sed:sed278', 'sed:sed279', 'sed:sed280', 'sed:sed281', 'sed:sed282', 'sed:sed283', 'sed:sed284', 'sed:sed285', 'sed:sed286', 'sed:sed287', 'uglify:thememapper']);
grunt.registerTask('compile-webcouturier-dropdownmenu',[ 'less:webcouturier-dropdownmenu', 'sed:sed288', 'sed:sed289', 'sed:sed290', 'sed:sed291', 'sed:sed292', 'sed:sed293', 'sed:sed294', 'sed:sed295', 'sed:sed296', 'sed:sed297', 'sed:sed298', 'sed:sed299', 'sed:sed300', 'sed:sed301', 'sed:sed302', 'sed:sed303', 'sed:sed304', 'sed:sed305', 'sed:sed306', 'sed:sed307', 'sed:sed308', 'sed:sed309', 'sed:sed310', 'sed:sed311', 'sed:sed312', 'sed:sed313', 'sed:sed314', 'sed:sed315', 'sed:sed316', 'sed:sed317', 'sed:sed318', 'sed:sed319', 'sed:sed320', 'sed:sed321', 'sed:sed322', 'sed:sed323', 'uglify:webcouturier-dropdownmenu']);
}
