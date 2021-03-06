// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {getLanguages} from './config';

// get object key by value
export function getLanguageLabel(key){
    const langs = getLanguages();

    if (langs[key]){
        return langs[key];
    }else{
        return 'Unknown language';
    }
}