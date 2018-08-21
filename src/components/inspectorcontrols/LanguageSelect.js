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
export default function LanguageSelect({onChange, value}){

    // get language list
    const languages = getLanguages();

    // generate dropdown list
    const languageItemList = Object.keys(languages).map(key => {

        // extract language label
        const label = languages[key];

        return {
            label: label,
            value: key
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