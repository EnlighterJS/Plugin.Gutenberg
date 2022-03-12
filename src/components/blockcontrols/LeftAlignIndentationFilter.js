// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2022 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {Components} from '../../wp';
import {getGlobalConfig} from '../../config';

// create a language selection menu
export default function LeftAlignIndentationFilter({onChange, value}){

    function filter(){
        // match all tabs
        let code = value.replace(/^(\t*)/gim, function(match, p1){
            // replace n tabs with n*newIndent spaces
            return (new Array(getGlobalConfig().indent * p1.length + 1)).join(' ');
        });

        let minIndentation = 99999;

        // get minimal indentation
        const lines = code.split('\n');
        for (let i=0;i<lines.length;i++){
            const l = lines[i];

            // non-empty line ?
            if (l.replace(/\s*/, '').length > 0){
                const k = l.match(/^( *)/gmi);

                // indentation found ?
                if (k && k.length == 1){
                    minIndentation = Math.min(k[0].length, minIndentation);

                    // no identation offset dectected
                }else{
                    minIndentation = 0;
                    break;
                }
            }
        }

        // remove indent ?
        if (minIndentation > 0 && minIndentation < 99999){
            const pattern = new RegExp('^( ){' + minIndentation + '}', 'gmi');
            code = code.replace(pattern, '');
        }

        // trigger onChange
        onChange(code);
    }
    // create dropdown menu
    return <Components.ToolbarButton
            className="enlighter-toolbar-button"
            icon="align-pull-left"
            label="Left align indentation"
            onClick={filter}
        ></Components.ToolbarButton>;
}