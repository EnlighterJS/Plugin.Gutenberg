// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {Components} from '../../wp';
import {getLanguages} from '../../config';

// create a language selection menu
export default function LanguageMenu({onChange, value}){

    // get language list
    const languages = getLanguages();

    // current/active label
    let activeLabel = "default";

    // generate dropdown list
    const languageItemList = Object.keys(languages).map(key => {

        // extract language label
        const label = languages[key];

        // active ?
        if (value === key){
            activeLabel = label;
        }

        return {
            title: label,

            // current item active ?
            isActive: (value === key),

            // passthrough
            onClick: () => onChange(key)
        };
    });

    // create dropdown menu
    return <Components.ToolbarDropdownMenu
        className="enlighter-dropdownmenu"
        icon="editor-paste-text"
        label="Select language"
        text={activeLabel}
        controls={languageItemList}
    />
}