// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import _edit from './edit';
import _transforms from './transforms';
import _attributes from './attributes';
import { EscapeHtml } from '../../wp';

// Standard Codeblock
export default {

    // metadata
    title: 'Enlighter Sourcecode',
    description: 'Syntax highlighting with EnlighterJS.',
    icon: 'editor-code',
    category: 'formatting',
    keywords: ['code', 'sourcecode', 'enlighter'],

    // internal block state
    attributes: _attributes,

    // block transformations
    transforms: _transforms,

    // extended block support features
    // @see https://wordpress.org/gutenberg/handbook/block-api/#supports-optional
    supports: {
        // allow custom classes (>=1.0.0)
        customClassName: true,

        // remove auto generated wrapper classname
        className: false,

        // disable html edit mode
        html: false
    },

    // show editing ui
    edit: _edit,

    // render element as html
    // @BUG https://github.com/WordPress/gutenberg/issues/8532
    // @TODO use custom validator 
    save: function render({attributes, className}){

        // generate css class list
        const cssClasses = 'EnlighterJSRAW' + (className ? ' ' + className : '');

        // escape content if exist
        const content = attributes.content ? EscapeHtml.escapeEditableHTML(attributes.content) : null;

        // add enlighterjs related attributes
        return <pre 
            className={cssClasses}
            data-enlighter-language={attributes.language}
            data-enlighter-theme={attributes.theme}
            data-enlighter-highlight={attributes.highlight}
            data-enlighter-linenumbers={attributes.linenumbers}
            data-enlighter-lineoffset={attributes.lineoffset}
            data-enlighter-title={attributes.title}
            data-enlighter-group={attributes.group}
            >
            { content }
            </pre>;
    }
};