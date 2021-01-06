// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// @see https://wordpress.org/gutenberg/handbook/block-api/attributes/
export default {
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
    },

    group: {
        type: 'attribute',
        attribute: 'data-enlighter-group', 
        default: ''
    }
};