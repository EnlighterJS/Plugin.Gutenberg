// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {Components} from '../../wp';
import {getThemes} from '../../config';

// create a theme selection menu
export default function ThemeSelect({onChange, value}){

    // get themes
    const themes = getThemes();

    // generate dropdown list
    const themeItemList = Object.keys(themes).map(key => {

        // extract theme label
        const label = themes[key];

        return {
            label: label,
            value: key
        };
    });

    // create dropdown menu
    return <Components.SelectControl
        label="Theme"
        value={value}
        onChange={onChange}
        options={themeItemList}
    />
}