EnlighterJS Plugin for Gutenberg Editor
=========================================

![Gutenberg Editor Integration](assets/enlighterjs_gutenberg_test.png)

Current Limitations
----------------------------------------------

* Legacy EnlighterJS code cannot be transformed to blocks by the "Transform to Blocks" utility of the classic editor.  
**Caused By:** [gutenberg/8648](https://github.com/WordPress/gutenberg/issues/8648)
* Newly created codeblocks (via Gutenberg) mess up the HTML with unused attributes because of a validation issue.  
**Caused By:** [gutenberg/8532](https://github.com/WordPress/gutenberg/issues/8532) / [gutenberg/7604](https://github.com/WordPress/gutenberg/issues/7604)
* Inline Syntax Highlighting is not supported  
**Caused By:** doesn't match with the Gutenberg Blocks-Only Style..

Usage
----------------------------------------------

As integral part of the Enlighter WordPress Plugin (future)

Development
----------------------------------------------

1. Create the plugin directory `wp-content/plugins/enlighter-gutenberg`
2. Copy `enlighter-gutenberg.php` and `dist/` into this directory
3. Activate the plugin

**Required Directory Structure**

```
wp-content/
   | - plugins/
   |      | -enlighter-gutenberg/
   |      |       |- enlighter-gutenberg.php
   |      |       |- dist/
   |      |       |      |- enlighterjs.gutenberg.min.css 
   |      |       |      |- enlighterjs.gutenberg.min.js
```

License
----------------------------------------------

EnlighterJS.Gutenberg is OpenSource and licensed under the Terms of [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0). You're welcome to [contribute](docs/CONTRIBUTING.md)
