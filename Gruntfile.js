
module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            
            "plone-logged-in": {
                options: {
                    compress: true,
                    paths: ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", "temp_resources", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2", "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray"],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-logged-in-compiled.css.map",
                    sourceMapBasepath: "/opt/eh/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    modifyVars: {
                      "picker": "'classic.css'",
"mockup-patterns-upload": "'pattern.upload.less'",
"mockup-popover": "'popover.less'",
"jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
"resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
"mockup-patterns-tooltip": "'pattern.tooltip.less'",
"plone-toolbar-font-primary": "sans-serif",
"mockup-patterns-recurrence": "'pattern.recurrence.less'",
"mockup-patterns-select2": "'pattern.select2.less'",
"bootstrap-progress-bars": "'progress-bars.less'",
"bootstrap-buttons": "'close.less'",
"mockup-patterns-tinymce": "'pattern.tinymce.less'",
"plone-toolbar-private-color": "rgb(196,24,60)",
"resourceregistry": "'resourceregistry.less'",
"mockup-patterns-livesearch": "'pattern.livesearch.less'",
"tinymce-default-styles": "'tinymce-styles.css'",
"plone-left-toolbar-expanded": "120px",
"plone-screen-sm-min": "768px",
"tinymce-visualblocks": "'visualblocks.css'",
"plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
"bootstrap-variables": "'variables.less'",
"resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
"plone-toolbar-published-color": "rgba(0,123,179,1)",
"mockuplessPath": "'/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less/'",
"mockup-patterns-structure": "'pattern.structure.less'",
"mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
"bowerPath": "'/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/'",
"plone-link-color": "rgba(0,123,179,1)",
"plone-patterns-toolbar": "'toolbar.plone.less'",
"bootstrap-modal": "'modals.less'",
"mockup-patterns-modal": "'pattern.modal.less'",
"plone-screen-md-max": "(@plone-screen-lg-min + 1)",
"tinymce": "'Content.less'",
"plone-toolbar-internally-published-color": "rgb(136,61,250)",
"plone-container-lg": "1170px",
"plone": "'plone.less'",
"plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
"plone-toolbar-internal-color": "rgb(250,184,42)",
"bootstrap-glyphicons": "'glyphicons.less'",
"bootstrap-mixins": "'mixins.less'",
"mockupPath": "'/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/'",
"plone-screen-sm-max": "(@plone-screen-md-min + 1)",
"plone-screen-md-min": "992px",
"picker_date": "'classic.date.css'",
"sitePath": "'/'",
"plone-container-sm": "750px",
"bootstrap-dropdown": "'dropdowns.less'",
"plone-screen-lg-min": "1200px",
"mockup-patterns-filemanager": "'pattern.filemanager.less'",
"mockup-patterns-autotoc": "'pattern.autotoc.less'",
"staticPath": "'/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static'",
"plone-left-toolbar": "60px",
"isPlone": "false",
"jqtree": "'jqtree.css'",
"plone-toolbar-font-secundary": "sans-serif",
"plone-gray-lighter": "lighten(#000, 80%)",
"mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
"plone-toolbar-pending-color": "rgb(226,231,33)",
"plone-logged-in": "'plone-logged-in.less'",
"plone-toolbar-separator-color": "rgba(255,255,255,.17)",
"plone-toolbar-text-color": "rgba(255,255,255,1)",
"mockup-patterns-tree": "'pattern.tree.less'",
"thememapper": "'thememapper.less'",
"bootstrap-button-groups": "'button-groups.less'",
"mockup-patterns-querystring": "'pattern.querystring.less'",
"resource-plone-app-event-event-css": "'f8ae63b6f975431083627d4d3e062d37.js'",
"plone-screen-xs-min": "480px",
"plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
"mockup-patterns-pickadate": "'pattern.pickadate.less'",
"plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
"select2": "'select2.css'",
"plone-container-md": "970px",
"mockup-patterns-relateditems": "'pattern.relateditems.less'",
"isMockup": "false",
"plone-toolbar-draft-color": "rgb(250,184,42)",
"bootstrap-basic": "'navbar.less'",
"plone-toolbar-link": "rgba(0,123,179,1)",
"bootstrap-badges": "'badges.less'",
"mockup-patterns-thememapper": "'pattern.thememapper.less'",
"picker_time": "'classic.time.css'",
"icon-font-path": "\"../fonts/\"",
"dropzone": "'dropzone.css'",
"plone-toolbar-bg": "rgba(0,0,0,.9)",
"plone-gray-light": "lighten(#000, 46.5%)",

                    }
                },
                files: [
                    {"/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css": ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less"]}
                ]
            }
,
            "plone": {
                options: {
                    compress: true,
                    paths: ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", "temp_resources", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2", "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray"],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-compiled.css.map",
                    sourceMapBasepath: "/opt/eh/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    modifyVars: {
                      "picker": "'classic.css'",
"mockup-patterns-upload": "'pattern.upload.less'",
"mockup-popover": "'popover.less'",
"jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
"resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
"mockup-patterns-tooltip": "'pattern.tooltip.less'",
"plone-toolbar-font-primary": "sans-serif",
"mockup-patterns-recurrence": "'pattern.recurrence.less'",
"mockup-patterns-select2": "'pattern.select2.less'",
"bootstrap-progress-bars": "'progress-bars.less'",
"bootstrap-buttons": "'close.less'",
"mockup-patterns-tinymce": "'pattern.tinymce.less'",
"plone-toolbar-private-color": "rgb(196,24,60)",
"resourceregistry": "'resourceregistry.less'",
"mockup-patterns-livesearch": "'pattern.livesearch.less'",
"tinymce-default-styles": "'tinymce-styles.css'",
"plone-left-toolbar-expanded": "120px",
"plone-screen-sm-min": "768px",
"tinymce-visualblocks": "'visualblocks.css'",
"plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
"bootstrap-variables": "'variables.less'",
"resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
"plone-toolbar-published-color": "rgba(0,123,179,1)",
"mockuplessPath": "'/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less/'",
"mockup-patterns-structure": "'pattern.structure.less'",
"mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
"bowerPath": "'/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/'",
"plone-link-color": "rgba(0,123,179,1)",
"plone-patterns-toolbar": "'toolbar.plone.less'",
"bootstrap-modal": "'modals.less'",
"mockup-patterns-modal": "'pattern.modal.less'",
"plone-screen-md-max": "(@plone-screen-lg-min + 1)",
"tinymce": "'Content.less'",
"plone-toolbar-internally-published-color": "rgb(136,61,250)",
"plone-container-lg": "1170px",
"plone": "'plone.less'",
"plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
"plone-toolbar-internal-color": "rgb(250,184,42)",
"bootstrap-glyphicons": "'glyphicons.less'",
"bootstrap-mixins": "'mixins.less'",
"mockupPath": "'/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/'",
"plone-screen-sm-max": "(@plone-screen-md-min + 1)",
"plone-screen-md-min": "992px",
"picker_date": "'classic.date.css'",
"sitePath": "'/'",
"plone-container-sm": "750px",
"bootstrap-dropdown": "'dropdowns.less'",
"plone-screen-lg-min": "1200px",
"mockup-patterns-filemanager": "'pattern.filemanager.less'",
"mockup-patterns-autotoc": "'pattern.autotoc.less'",
"staticPath": "'/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static'",
"plone-left-toolbar": "60px",
"isPlone": "false",
"jqtree": "'jqtree.css'",
"plone-toolbar-font-secundary": "sans-serif",
"plone-gray-lighter": "lighten(#000, 80%)",
"mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
"plone-toolbar-pending-color": "rgb(226,231,33)",
"plone-logged-in": "'plone-logged-in.less'",
"plone-toolbar-separator-color": "rgba(255,255,255,.17)",
"plone-toolbar-text-color": "rgba(255,255,255,1)",
"mockup-patterns-tree": "'pattern.tree.less'",
"thememapper": "'thememapper.less'",
"bootstrap-button-groups": "'button-groups.less'",
"mockup-patterns-querystring": "'pattern.querystring.less'",
"resource-plone-app-event-event-css": "'f8ae63b6f975431083627d4d3e062d37.js'",
"plone-screen-xs-min": "480px",
"plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
"mockup-patterns-pickadate": "'pattern.pickadate.less'",
"plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
"select2": "'select2.css'",
"plone-container-md": "970px",
"mockup-patterns-relateditems": "'pattern.relateditems.less'",
"isMockup": "false",
"plone-toolbar-draft-color": "rgb(250,184,42)",
"bootstrap-basic": "'navbar.less'",
"plone-toolbar-link": "rgba(0,123,179,1)",
"bootstrap-badges": "'badges.less'",
"mockup-patterns-thememapper": "'pattern.thememapper.less'",
"picker_time": "'classic.time.css'",
"icon-font-path": "\"../fonts/\"",
"dropzone": "'dropzone.css'",
"plone-toolbar-bg": "rgba(0,0,0,.9)",
"plone-gray-light": "lighten(#000, 46.5%)",

                    }
                },
                files: [
                    {"/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css": ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone.less"]}
                ]
            }
,
            "resourceregistry": {
                options: {
                    compress: true,
                    paths: ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", "temp_resources", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2", "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray"],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "resourceregistry-compiled.css.map",
                    sourceMapBasepath: "/opt/eh/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    modifyVars: {
                      "picker": "'classic.css'",
"mockup-patterns-upload": "'pattern.upload.less'",
"mockup-popover": "'popover.less'",
"jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
"resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
"mockup-patterns-tooltip": "'pattern.tooltip.less'",
"plone-toolbar-font-primary": "sans-serif",
"mockup-patterns-recurrence": "'pattern.recurrence.less'",
"mockup-patterns-select2": "'pattern.select2.less'",
"bootstrap-progress-bars": "'progress-bars.less'",
"bootstrap-buttons": "'close.less'",
"mockup-patterns-tinymce": "'pattern.tinymce.less'",
"plone-toolbar-private-color": "rgb(196,24,60)",
"resourceregistry": "'resourceregistry.less'",
"mockup-patterns-livesearch": "'pattern.livesearch.less'",
"tinymce-default-styles": "'tinymce-styles.css'",
"plone-left-toolbar-expanded": "120px",
"plone-screen-sm-min": "768px",
"tinymce-visualblocks": "'visualblocks.css'",
"plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
"bootstrap-variables": "'variables.less'",
"resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
"plone-toolbar-published-color": "rgba(0,123,179,1)",
"mockuplessPath": "'/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less/'",
"mockup-patterns-structure": "'pattern.structure.less'",
"mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
"bowerPath": "'/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/'",
"plone-link-color": "rgba(0,123,179,1)",
"plone-patterns-toolbar": "'toolbar.plone.less'",
"bootstrap-modal": "'modals.less'",
"mockup-patterns-modal": "'pattern.modal.less'",
"plone-screen-md-max": "(@plone-screen-lg-min + 1)",
"tinymce": "'Content.less'",
"plone-toolbar-internally-published-color": "rgb(136,61,250)",
"plone-container-lg": "1170px",
"plone": "'plone.less'",
"plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
"plone-toolbar-internal-color": "rgb(250,184,42)",
"bootstrap-glyphicons": "'glyphicons.less'",
"bootstrap-mixins": "'mixins.less'",
"mockupPath": "'/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/'",
"plone-screen-sm-max": "(@plone-screen-md-min + 1)",
"plone-screen-md-min": "992px",
"picker_date": "'classic.date.css'",
"sitePath": "'/'",
"plone-container-sm": "750px",
"bootstrap-dropdown": "'dropdowns.less'",
"plone-screen-lg-min": "1200px",
"mockup-patterns-filemanager": "'pattern.filemanager.less'",
"mockup-patterns-autotoc": "'pattern.autotoc.less'",
"staticPath": "'/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static'",
"plone-left-toolbar": "60px",
"isPlone": "false",
"jqtree": "'jqtree.css'",
"plone-toolbar-font-secundary": "sans-serif",
"plone-gray-lighter": "lighten(#000, 80%)",
"mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
"plone-toolbar-pending-color": "rgb(226,231,33)",
"plone-logged-in": "'plone-logged-in.less'",
"plone-toolbar-separator-color": "rgba(255,255,255,.17)",
"plone-toolbar-text-color": "rgba(255,255,255,1)",
"mockup-patterns-tree": "'pattern.tree.less'",
"thememapper": "'thememapper.less'",
"bootstrap-button-groups": "'button-groups.less'",
"mockup-patterns-querystring": "'pattern.querystring.less'",
"resource-plone-app-event-event-css": "'f8ae63b6f975431083627d4d3e062d37.js'",
"plone-screen-xs-min": "480px",
"plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
"mockup-patterns-pickadate": "'pattern.pickadate.less'",
"plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
"select2": "'select2.css'",
"plone-container-md": "970px",
"mockup-patterns-relateditems": "'pattern.relateditems.less'",
"isMockup": "false",
"plone-toolbar-draft-color": "rgb(250,184,42)",
"bootstrap-basic": "'navbar.less'",
"plone-toolbar-link": "rgba(0,123,179,1)",
"bootstrap-badges": "'badges.less'",
"mockup-patterns-thememapper": "'pattern.thememapper.less'",
"picker_time": "'classic.time.css'",
"icon-font-path": "\"../fonts/\"",
"dropzone": "'dropzone.css'",
"plone-toolbar-bg": "rgba(0,0,0,.9)",
"plone-gray-light": "lighten(#000, 46.5%)",

                    }
                },
                files: [
                    {"/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css": ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry.less"]}
                ]
            }
,
            "thememapper": {
                options: {
                    compress: true,
                    paths: ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/less", "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", "temp_resources", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2", "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray"],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "thememapper-compiled.css.map",
                    sourceMapBasepath: "/opt/eh/collective.abctune",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    modifyVars: {
                      "picker": "'classic.css'",
"mockup-patterns-upload": "'pattern.upload.less'",
"mockup-popover": "'popover.less'",
"jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
"resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
"mockup-patterns-tooltip": "'pattern.tooltip.less'",
"plone-toolbar-font-primary": "sans-serif",
"mockup-patterns-recurrence": "'pattern.recurrence.less'",
"mockup-patterns-select2": "'pattern.select2.less'",
"bootstrap-progress-bars": "'progress-bars.less'",
"bootstrap-buttons": "'close.less'",
"mockup-patterns-tinymce": "'pattern.tinymce.less'",
"plone-toolbar-private-color": "rgb(196,24,60)",
"resourceregistry": "'resourceregistry.less'",
"mockup-patterns-livesearch": "'pattern.livesearch.less'",
"tinymce-default-styles": "'tinymce-styles.css'",
"plone-left-toolbar-expanded": "120px",
"plone-screen-sm-min": "768px",
"tinymce-visualblocks": "'visualblocks.css'",
"plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
"bootstrap-variables": "'variables.less'",
"resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
"plone-toolbar-published-color": "rgba(0,123,179,1)",
"mockuplessPath": "'/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less/'",
"mockup-patterns-structure": "'pattern.structure.less'",
"mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
"bowerPath": "'/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/'",
"plone-link-color": "rgba(0,123,179,1)",
"plone-patterns-toolbar": "'toolbar.plone.less'",
"bootstrap-modal": "'modals.less'",
"mockup-patterns-modal": "'pattern.modal.less'",
"plone-screen-md-max": "(@plone-screen-lg-min + 1)",
"tinymce": "'Content.less'",
"plone-toolbar-internally-published-color": "rgb(136,61,250)",
"plone-container-lg": "1170px",
"plone": "'plone.less'",
"plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
"plone-toolbar-internal-color": "rgb(250,184,42)",
"bootstrap-glyphicons": "'glyphicons.less'",
"bootstrap-mixins": "'mixins.less'",
"mockupPath": "'/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/'",
"plone-screen-sm-max": "(@plone-screen-md-min + 1)",
"plone-screen-md-min": "992px",
"picker_date": "'classic.date.css'",
"sitePath": "'/'",
"plone-container-sm": "750px",
"bootstrap-dropdown": "'dropdowns.less'",
"plone-screen-lg-min": "1200px",
"mockup-patterns-filemanager": "'pattern.filemanager.less'",
"mockup-patterns-autotoc": "'pattern.autotoc.less'",
"staticPath": "'/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static'",
"plone-left-toolbar": "60px",
"isPlone": "false",
"jqtree": "'jqtree.css'",
"plone-toolbar-font-secundary": "sans-serif",
"plone-gray-lighter": "lighten(#000, 80%)",
"mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
"plone-toolbar-pending-color": "rgb(226,231,33)",
"plone-logged-in": "'plone-logged-in.less'",
"plone-toolbar-separator-color": "rgba(255,255,255,.17)",
"plone-toolbar-text-color": "rgba(255,255,255,1)",
"mockup-patterns-tree": "'pattern.tree.less'",
"thememapper": "'thememapper.less'",
"bootstrap-button-groups": "'button-groups.less'",
"mockup-patterns-querystring": "'pattern.querystring.less'",
"resource-plone-app-event-event-css": "'f8ae63b6f975431083627d4d3e062d37.js'",
"plone-screen-xs-min": "480px",
"plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
"mockup-patterns-pickadate": "'pattern.pickadate.less'",
"plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
"select2": "'select2.css'",
"plone-container-md": "970px",
"mockup-patterns-relateditems": "'pattern.relateditems.less'",
"isMockup": "false",
"plone-toolbar-draft-color": "rgb(250,184,42)",
"bootstrap-basic": "'navbar.less'",
"plone-toolbar-link": "rgba(0,123,179,1)",
"bootstrap-badges": "'badges.less'",
"mockup-patterns-thememapper": "'pattern.thememapper.less'",
"picker_time": "'classic.time.css'",
"icon-font-path": "\"../fonts/\"",
"dropzone": "'dropzone.css'",
"plone-toolbar-bg": "rgba(0,0,0,.9)",
"plone-gray-light": "lighten(#000, 46.5%)",

                    }
                },
                files: [
                    {"/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css": ["/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper.less"]}
                ]
            }

        },
        requirejs: {
            
            "midijs": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n", "underscore": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/cookietrigger/pattern", "main-abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-modal": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Users/hardy/.buildout/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/5637cb30ee9c4327a0850911e7a142e9", "mockup-patterns-resourceregistry": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-thememapper-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/0e3b1b7e29e54c828e65acb290090157", "tinymce-print": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mockup-patterns-resourceregistry-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "midijs": "/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/MIDI", "bootstrap-tooltip": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-layer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "bootstrap-collapse": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cdcdb4c4eff14e988945d963f02f5970", "JSXTransformer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "main-abctune": {}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "select2": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "abctune": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "midijs": {}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-layer": {"deps": ["tinymce"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/MIDI.js',
                    exclude: ['jquery'],
                    out: '/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/midijs-compiled.js',
                    optimize: "none"
                }
            },

            "main-abctune": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n", "underscore": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/cookietrigger/pattern", "main-abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-modal": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Users/hardy/.buildout/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/5637cb30ee9c4327a0850911e7a142e9", "mockup-patterns-resourceregistry": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-thememapper-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/0e3b1b7e29e54c828e65acb290090157", "tinymce-print": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mockup-patterns-resourceregistry-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "midijs": "/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/MIDI", "bootstrap-tooltip": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-layer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "bootstrap-collapse": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cdcdb4c4eff14e988945d963f02f5970", "JSXTransformer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "main-abctune": {}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "select2": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "abctune": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "midijs": {}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-layer": {"deps": ["tinymce"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune.js',
                    exclude: ['jquery'],
                    out: '/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune-compiled.js',
                    optimize: "none"
                }
            },

            "plone-logged-in": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "empty:", "tinymce-spellchecker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "empty:", "tinymce-autosave": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "empty:", "mockup-i18n": "empty:", "underscore": "empty:", "pat-logger": "empty:", "ace-mode-text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "empty:", "mockup-patterns-cookietrigger": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/cookietrigger/pattern", "main-abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-modal": "empty:", "jquery.cookie": "empty:", "tinymce-wordcount": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "empty:", "tinymce-advlist": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Users/hardy/.buildout/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/5637cb30ee9c4327a0850911e7a142e9", "mockup-patterns-resourceregistry": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-thememapper-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "empty:", "plone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "empty:", "mockup-patterns-structure": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "empty:", "mockup-patterns-sortable": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "empty:", "bootstrap-dropdown": "empty:", "mockup-patterns-contentloader": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "empty:", "tinymce-textcolor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/0e3b1b7e29e54c828e65acb290090157", "tinymce-print": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "empty:", "tinymce-hr": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "empty:", "tinymce-media": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "empty:", "mockup-patterns-moment": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "empty:", "plone-patterns-toolbar": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mockup-patterns-resourceregistry-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "midijs": "/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/MIDI", "bootstrap-tooltip": "empty:", "mockup-patterns-autotoc": "empty:", "tinymce-importcss": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "empty:", "tinymce-lists": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "empty:", "tinymce-colorpicker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-layer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "bootstrap-collapse": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cdcdb4c4eff14e988945d963f02f5970", "JSXTransformer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "empty:", "dropzone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "main-abctune": {}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "select2": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "abctune": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "midijs": {}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-layer": {"deps": ["tinymce"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js',
                    exclude: ['jquery'],
                    out: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js',
                    optimize: "none"
                }
            },

            "plone": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n", "underscore": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/cookietrigger/pattern", "main-abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-modal": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Users/hardy/.buildout/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/5637cb30ee9c4327a0850911e7a142e9", "mockup-patterns-resourceregistry": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-thememapper-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/0e3b1b7e29e54c828e65acb290090157", "tinymce-print": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mockup-patterns-resourceregistry-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "midijs": "/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/MIDI", "bootstrap-tooltip": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-layer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "bootstrap-collapse": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cdcdb4c4eff14e988945d963f02f5970", "JSXTransformer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "main-abctune": {}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "select2": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "abctune": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "midijs": {}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-layer": {"deps": ["tinymce"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone.js',
                    exclude: ['jquery'],
                    out: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.js',
                    optimize: "none"
                }
            },

            "resourceregistry": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n", "underscore": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/cookietrigger/pattern", "main-abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-modal": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Users/hardy/.buildout/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/5637cb30ee9c4327a0850911e7a142e9", "mockup-patterns-resourceregistry": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-thememapper-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/0e3b1b7e29e54c828e65acb290090157", "tinymce-print": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mockup-patterns-resourceregistry-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "midijs": "/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/MIDI", "bootstrap-tooltip": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-layer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "bootstrap-collapse": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cdcdb4c4eff14e988945d963f02f5970", "JSXTransformer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "main-abctune": {}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "select2": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "abctune": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "midijs": {}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-layer": {"deps": ["tinymce"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry.js',
                    exclude: ['jquery'],
                    out: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js',
                    optimize: "none"
                }
            },

            "thememapper": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n", "underscore": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/cookietrigger/pattern", "main-abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-modal": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Users/hardy/.buildout/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/5637cb30ee9c4327a0850911e7a142e9", "mockup-patterns-resourceregistry": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "abctune": "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune", "mockup-patterns-thememapper-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/0e3b1b7e29e54c828e65acb290090157", "tinymce-print": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mockup-patterns-resourceregistry-url": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "midijs": "/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/MIDI", "bootstrap-tooltip": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-layer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "bootstrap-collapse": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/cdcdb4c4eff14e988945d963f02f5970", "JSXTransformer": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "main-abctune": {}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "select2": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "abctune": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "midijs": {}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-layer": {"deps": ["tinymce"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper.js',
                    exclude: ['jquery'],
                    out: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js',
                    optimize: "none"
                }
            },

        },
        sed: {
            
    sed0: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed1: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed2: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed3: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed4: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed5: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed6: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed7: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed8: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed9: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed10: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed11: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed12: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed13: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed14: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed15: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed16: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed17: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed18: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed19: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed20: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed21: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed22: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed23: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed24: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed25: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed26: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed27: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed28: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed29: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed30: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed31: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/opt/eh/collective.abctune',
      replacement: '',
    },

    sed32: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed33: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed34: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed35: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed36: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed37: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed38: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed39: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed40: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed41: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed42: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed43: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed44: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed45: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed46: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed47: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed48: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed49: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed50: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed51: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed52: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed53: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed54: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed55: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed56: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed57: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed58: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed59: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed60: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed61: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed62: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed63: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/opt/eh/collective.abctune',
      replacement: '',
    },

    sed64: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed65: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed66: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed67: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed68: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed69: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed70: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed71: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed72: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed73: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed74: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed75: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed76: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed77: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed78: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed79: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed80: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed81: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed82: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed83: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed84: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed85: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed86: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed87: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed88: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed89: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed90: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed91: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed92: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed93: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed94: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed95: {
      path: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/opt/eh/collective.abctune',
      replacement: '',
    },

    sed96: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed97: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed98: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed99: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed100: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed101: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed102: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed103: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed104: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed105: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed106: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed107: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed108: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed109: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed110: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed111: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed112: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed113: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed114: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed115: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed116: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed117: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed118: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed119: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed120: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed121: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed122: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed123: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed124: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed125: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed126: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Users/hardy/.buildout/eggs/mockup-2.1.2-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed127: {
      path: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/opt/eh/collective.abctune',
      replacement: '',
    },

        },
        uglify: {
            
        "abctune": {
          options: {
            sourceMap: true,
            sourceMapName: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/abctune-compiled.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/abctune-compiled.js': ["/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/midijs-compiled.js", "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune-compiled.js"]
          }
        },

        "plone-logged-in": {
          options: {
            sourceMap: true,
            sourceMapName: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js': ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js"]
          }
        },

        "plone": {
          options: {
            sourceMap: true,
            sourceMapName: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.min.js': ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-compiled.js"]
          }
        },

        "resourceregistry": {
          options: {
            sourceMap: true,
            sourceMapName: '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.min.js': ["/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js"]
          }
        },

        "thememapper": {
          options: {
            sourceMap: true,
            sourceMapName: '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js': ["/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js"]
          }
        },

        },
        watch: {
            scripts: {
                files: ["/opt/eh/collective.abctune/src/collective/abctune/static/bower_components/MIDI.js/build/MIDI.js", "/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune.js", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone.js", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/plone.less", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry.js", "/Users/hardy/.buildout/eggs/Products.CMFPlone-5.0.2-py2.7.egg/Products/CMFPlone/static/resourceregistry.less", "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper.js", "/Users/hardy/.buildout/eggs/plone.app.theming-1.2.16-py2.7.egg/plone/app/theming/browser/resources/thememapper.less"],
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
    
grunt.registerTask('compile-abctune',["requirejs:midijs","requirejs:main-abctune", 'less:abctune', , 'uglify:abctune']);
grunt.registerTask('compile-plone-logged-in',["requirejs:plone-logged-in", 'less:plone-logged-in', 'sed:sed0', 'sed:sed1', 'sed:sed2', 'sed:sed3', 'sed:sed4', 'sed:sed5', 'sed:sed6', 'sed:sed7', 'sed:sed8', 'sed:sed9', 'sed:sed10', 'sed:sed11', 'sed:sed12', 'sed:sed13', 'sed:sed14', 'sed:sed15', 'sed:sed16', 'sed:sed17', 'sed:sed18', 'sed:sed19', 'sed:sed20', 'sed:sed21', 'sed:sed22', 'sed:sed23', 'sed:sed24', 'sed:sed25', 'sed:sed26', 'sed:sed27', 'sed:sed28', 'sed:sed29', 'sed:sed30', 'sed:sed31', 'uglify:plone-logged-in']);
grunt.registerTask('compile-plone',["requirejs:plone", 'less:plone', 'sed:sed32', 'sed:sed33', 'sed:sed34', 'sed:sed35', 'sed:sed36', 'sed:sed37', 'sed:sed38', 'sed:sed39', 'sed:sed40', 'sed:sed41', 'sed:sed42', 'sed:sed43', 'sed:sed44', 'sed:sed45', 'sed:sed46', 'sed:sed47', 'sed:sed48', 'sed:sed49', 'sed:sed50', 'sed:sed51', 'sed:sed52', 'sed:sed53', 'sed:sed54', 'sed:sed55', 'sed:sed56', 'sed:sed57', 'sed:sed58', 'sed:sed59', 'sed:sed60', 'sed:sed61', 'sed:sed62', 'sed:sed63', 'uglify:plone']);
grunt.registerTask('compile-resourceregistry',["requirejs:resourceregistry", 'less:resourceregistry', 'sed:sed64', 'sed:sed65', 'sed:sed66', 'sed:sed67', 'sed:sed68', 'sed:sed69', 'sed:sed70', 'sed:sed71', 'sed:sed72', 'sed:sed73', 'sed:sed74', 'sed:sed75', 'sed:sed76', 'sed:sed77', 'sed:sed78', 'sed:sed79', 'sed:sed80', 'sed:sed81', 'sed:sed82', 'sed:sed83', 'sed:sed84', 'sed:sed85', 'sed:sed86', 'sed:sed87', 'sed:sed88', 'sed:sed89', 'sed:sed90', 'sed:sed91', 'sed:sed92', 'sed:sed93', 'sed:sed94', 'sed:sed95', 'uglify:resourceregistry']);
grunt.registerTask('compile-thememapper',["requirejs:thememapper", 'less:thememapper', 'sed:sed96', 'sed:sed97', 'sed:sed98', 'sed:sed99', 'sed:sed100', 'sed:sed101', 'sed:sed102', 'sed:sed103', 'sed:sed104', 'sed:sed105', 'sed:sed106', 'sed:sed107', 'sed:sed108', 'sed:sed109', 'sed:sed110', 'sed:sed111', 'sed:sed112', 'sed:sed113', 'sed:sed114', 'sed:sed115', 'sed:sed116', 'sed:sed117', 'sed:sed118', 'sed:sed119', 'sed:sed120', 'sed:sed121', 'sed:sed122', 'sed:sed123', 'sed:sed124', 'sed:sed125', 'sed:sed126', 'sed:sed127', 'uglify:thememapper']);
}
