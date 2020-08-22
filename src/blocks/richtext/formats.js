// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {Editor, RichText} from '../../wp';

function onEdit(props){

    // toggle editor format
    function toggleFormat(){
        props.onChange(RichText.toggleFormat(
            props.value,
            { type: 'enlighter/richtext-inline' }
        ));
    }

    // create toolbar button
    return <Editor.RichTextToolbarButton
        icon="editor-code"
        title="Enlighter Inline Sourcecode"
        onClick={toggleFormat}
        isActive={props.isActive}
        />
}

export default {
    title: 'Enlighter Inline Sourcecode',
    tagName: 'code',
    className: 'EnlighterJSRAW',
    edit: onEdit,
};