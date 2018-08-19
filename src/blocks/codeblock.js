// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {Editor, Components, Element, Blocks} from '../wp';
import _TextEditor from '../components/TextEditor';
import _LanguageMenu from '../components/LanguageMenu';
import _ThemeMenu from '../components/ThemeMenu';
import {getLanguageLabel} from '../languages';

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

        // Extract EnlighterJS related attributes
        // use type attribute instead of query for easier handling
        language: {
            type: 'attribute',
            attribute: 'data-enlighter-language', 
            default: 'generic'
        },

        theme: {
            type: 'attribute',
            attribute: 'data-enlighter-theme', 
            default: ''
        },

        highlight: {
            type: 'attribute',
            attribute: 'data-enlighter-highlight', 
            default: ''
        },

        linenumbers: {
            type: 'attribute',
            attribute: 'data-enlighter-linenumbers', 
            default: ''
        },

        lineoffset: {
            type: 'attribute',
            attribute: 'data-enlighter-lineoffset', 
            default: ''
        },

        title: {
            type: 'attribute',
            attribute: 'data-enlighter-title', 
            default: ''
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

            // allow transform from RAW DOM <pre><code> (legacy syntax highlighting)
            // higher priority then 'core/preformatted'
            // automatically applied when transforming from legacy to blocks
            {
                type: 'raw',
                priority: 4,
                isMatch: function(node){
                    return  node.nodeName === 'PRE' &&
                            node.children.length === 1 &&
                            node.firstChild.nodeName === 'CODE'
                },
                transform: function (node){
                    // use inner text as content
                    return Blocks.createBlock('enlighter/codeblock', {content: node.textContent});
                },
            },

            // allow transform from standard EnlighterJS code to blocks
            // higher priority then 'core/preformatted'
            // automatically applied when transforming from legacy to blocks
            // @BUG https://github.com/WordPress/gutenberg/issues/8648
            // @TODO re-enable transform and use attribute matching
            /*
            {
                type: 'raw',
                priority: 4,
                isMatch: function(node){
                    return  false;
                },
                transform: function (node){
                    // use inner text as content
                    return _wp.blocks.createBlock('enlighter/codeblock', {content: node.textContent});
                },
            },
            */

            // allow transform from core/code block
            // allow transform from core/preformatted block
            // allow transform from core/paragraph block
            {
                type: 'block',
                blocks: ['core/code', 'core/preformatted', 'core/paragraph'],
                transform: function ({content}) {
                    return Blocks.createBlock('enlighter/codeblock', {content});
                },
            }
        ],

        to: [
            // allow transform to core/code block
            {
                type: 'block',
                blocks: ['core/code'],
                transform: function ({content}) {
                    return Blocks.createBlock('core/code', {content});
                },
            },

            // allow transform to core/preformatted block
            {
                type: 'block',
                blocks: ['core/preformatted'],
                transform: function ({content}) {
                    return Blocks.createBlock('core/preformatted', {content});
                },
            }
        ]
    },

    // The "edit" property must be a valid function.
    edit: function ui({attributes, setAttributes}){

        // use standard Gutenberg PlainText View with custom styles
        // 
        return <Element.Fragment>

            <Editor.BlockControls>
                <Components.Toolbar>
                    <_LanguageMenu value={attributes.language} onChange={(language) => setAttributes({language})}/>
                    <_ThemeMenu value={attributes.theme} onChange={(theme) => setAttributes({theme})} />
                </Components.Toolbar>
            </Editor.BlockControls>

            <div className="enlighter-block-wrapper">
                <div className="enlighter-header">
                    <div className="enlighter-title">{getLanguageLabel(attributes.language)}</div>
                </div>
                <_TextEditor
                    value={ attributes.content }
                    onChange={(content) => setAttributes({content})}
                    placeholder="Insert Sourcecode.."
                    aria-label="Code"
                />
                <div className="enlighter-footer">
                    <div className="enlighter-footer-label"><strong>EnlighterJS</strong> Syntax Highlighter</div>
                </div>
            </div>
        </Element.Fragment>
        ;
    },

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
            >
            {attributes.content}
            </pre>;
    }
};