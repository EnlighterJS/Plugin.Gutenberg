// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import _wp from '../wp';
import _TextEditor from '../components/TextEditor';
import _Toolbar from '../components/Toolbar';

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
        },

        config: {
            source: 'query',
            selector: 'pre.EnlighterJSRAW',
            query: {
                language:    { source: 'attribute', attribute: 'data-enlighter-language' },
                theme:       { source: 'attribute', attribute: 'data-enlighter-theme' },
                highlight:   { source: 'attribute', attribute: 'data-enlighter-highlight' },
                linenumbers: { source: 'attribute', attribute: 'data-enlighter-linenumbers' },
                lineoffset:  { source: 'attribute', attribute: 'data-enlighter-lineoffset' },
                title:       { source: 'attribute', attribute: 'data-enlighter-title' },
            }
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

   // block element transformation/converting
    transforms: {
        from: [
             // allow transform from RAW DOM <pre> node
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
            },

            // allow transform from core/code block
            // allow transform from core/preformatted block
            // allow transform from core/paragraph block
            {
                type: 'block',
                blocks: ['core/code', 'core/preformatted', 'core/paragraph'],
                transform: function ({content}) {
                    return _wp.blocks.createBlock('enlighter/codeblock', {content});
                },
            }
        ],

        to: [
            // allow transform to core/code block
            {
                type: 'block',
                blocks: ['core/code'],
                transform: function ({content}) {
                    return _wp.blocks.createBlock('core/code', {content});
                },
            },

            // allow transform to core/preformatted block
            {
                type: 'block',
                blocks: ['core/preformatted'],
                transform: function ({content}) {
                    return _wp.blocks.createBlock('core/preformatted', {content});
                },
            }
        ]
    },

    // The "edit" property must be a valid function.
    edit: function blockEdit({attributes, setAttributes, className}){

        // use standard Gutenberg PlainText View with custom styles
        return [
            <_Toolbar key="controls">
            
            <wp.editor.AlignmentToolbar />
            </_Toolbar>,

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
        ];
    },

    // render element as html
    save: function blockRender({attributes}){
        console.log(attributes);
        // add enlighterjs related attributes
        return <pre 
            className="EnlighterJSRAW"
            >
            {attributes.content}
            </pre>;
    }
};