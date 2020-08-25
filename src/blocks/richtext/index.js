// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2020 Andi Dittrich <https://andidittrich.com>
// ----------------------------------------------------------------------

import _edit from './edit';
import _attributes from './attributes';

// Inline RichText format
export default {
    // metadata
    title: 'Enlighter Inline Sourcecode',
    tagName: 'code',
    className: 'EnlighterJSRAW',

    // internal block state
    attributes: _attributes,

    // show editing ui
    edit: _edit,
};
