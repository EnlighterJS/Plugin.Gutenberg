// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {Components} from '../../wp';
import _editorConfig from '../../config';

// create a language selection menu
export default function LanguageSelect({onChange, value}){

    // generate dropdown list
    const languageItemList = Object.keys(_editorConfig.languages).map(label => {

        // extract language identifier
        const languageIdentifier = _editorConfig.languages[label];

        return {
            label: label,
            value: languageIdentifier
        };
    });

    // create dropdown menu
    return <Components.SelectControl
        label="Language"
        value={value}
        onChange={onChange}
        options={languageItemList}
    />
}