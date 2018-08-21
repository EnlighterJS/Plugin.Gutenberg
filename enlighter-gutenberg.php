<?php
/**
    Plugin Name: EnlighterJS Gutenberg
    Plugin URI: https://enlighterjs.org
    Description: DEVELOPMENT PLUGIN - NOT TO BE USED IN PRODUCTION!
    Version: 0.2-ALPHA1
    Author: Andi Dittrich
    Author URI: https://andidittrich.de
    License: GPL-2.0
*/

// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Development Plugin - NOT TO BE USED IN PRODUCTION!


define('ENLIGHTER_GUTENBERG_PLUGIN_PATH', dirname(__FILE__));
define('ENLIGHTER_GUTENBERG_PLUGIN_URL', plugins_url('/enlighter-gutenberg/'));


add_action('enqueue_block_editor_assets', function(){
    wp_enqueue_script(
        'enlighterjs-gutenberg',
        ENLIGHTER_GUTENBERG_PLUGIN_URL . 'dist/enlighterjs.gutenberg.min.js',
        array('wp-blocks', 'wp-i18n', 'wp-element'),
        sha1_file(ENLIGHTER_GUTENBERG_PLUGIN_PATH . '/dist/enlighterjs.gutenberg.min.js')
    );
    wp_enqueue_style(
        'enlighterjs-gutenberg',
        ENLIGHTER_GUTENBERG_PLUGIN_URL . 'dist/enlighterjs.gutenberg.min.css',
        array(),
        sha1_file(ENLIGHTER_GUTENBERG_PLUGIN_PATH . '/dist/enlighterjs.gutenberg.min.css')
    );
});