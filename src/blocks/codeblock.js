// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import _TextEditor from '../components/TextEditor';

// Standard Codeblock
export default {

    // metadata
    title: 'Enlighter Sourcecode',
    icon: 'editor-code',
    category: 'formatting',
    keywords: ['code', 'sourcecode', 'enlighter'],

    // internal block state
    // @see https://wordpress.org/gutenberg/handbook/block-api/attributes/
    attributes: {
        // extract sourcecode from saved (html) content
        content: {
            type: 'string',
            selector: 'pre.EnlighterJSRAW',
            source: 'text'
        }
    },

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

    // allow transform from RAW DOM <pre> node
    transforms: {
        from: [
            {
                type: 'raw',
                isMatch: ( node ) => (
                    node.nodeName === 'PRE' &&
                    node.children.length === 1
                ),
                schema: {
                    pre: {
                        children: {
                            '#text': {},
                        },
                    }
                }
            }
        ]
    },

    // The "edit" property must be a valid function.
    edit: function blockEdit({attributes, setAttributes, className}){

        // use standard Gutenberg PlainText View with custom styles
        return (
            // outer container
            <div className={className}>
                <_TextEditor
                    value={ attributes.content }
                    onChange={(content) => setAttributes({content})}
                    placeholder="Insert Sourcecode.."
                    aria-label="Code"
                />
                <div className="enlighter-footer-label"><small>EnlighterJS Syntax Highlighter</small></div>
            </div>
        );
    },

    // render element as html
    save: function blockRender({attributes}){
        console.log(attributes);
        // add enlighterjs related attributes
        return <pre 
            data-enlighter-language="generic"
            data-enlighter-theme="ddd"
            className="EnlighterJSRAW"
            >
            {attributes.content}
            </pre>;
    }
};