// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import _edit from './edit';
import _transforms from './transforms';
import _attributes from './attributes';

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
        // no custom classes
        customClassName: false,

        // remove auto generated wrapper classname
        className: false,

        // disable html edit mode
        html: false
    },

    // handle deprecated blocks (previous plugin version)
    // @see https://wordpress.org/gutenberg/handbook/block-api/deprecated-blocks/
    deprecated: [
    ],

    // show editing ui
    edit: _edit,

    // render element as html
    // @BUG https://github.com/WordPress/gutenberg/issues/8532
    // @TODO use custom validator 
    save: function render({attributes}){
        // add enlighterjs related attributes
        return <pre 
            className="EnlighterJSRAW"
            data-enlighter-language={attributes.language}
            data-enlighter-theme={attributes.theme}
            data-enlighter-highlight={attributes.highlight}
            data-enlighter-linenumbers={attributes.linenumbers}
            data-enlighter-lineoffset={attributes.lineoffset}
            data-enlighter-title={attributes.title}
            data-enlighter-group={attributes.group}
            >
            {attributes.content}
            </pre>;
    }
};