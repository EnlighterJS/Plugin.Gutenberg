// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {Blocks, RichText} from './wp';
import _codeblock from './blocks/codeblock/index';
import _inlineFormats from './blocks/richtext/formats';

// Register Enlighter Blockcode
Blocks.registerBlockType('enlighter/codeblock', _codeblock);

// Register Enlighter formats
//RichText.registerFormatType('enlighter/richtext-inline', _inlineFormats);

// static properties
export const version = '[[VERSION]]';