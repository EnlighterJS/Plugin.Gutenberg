## Branch 1.x ##

### 1.1.2 ###

* Bugfix: Gutenberg inline editing not working on Safari due to required `rangeCount` call - thanks to [phruse on GitHub](https://github.com/EnlighterJS/Plugin.Gutenberg/issues/36)


### 1.1.1 ###

* Bugfix: Gutenberg `escapeEditableHTML` throws an error in case the block is empty (attributes.content returns `null`)

### 1.1.0 ###

* Added: inline highlighting support (RichText format)
* Added: border around Enlighter codeblock (default theme)
* Changed: updated buildsystem to babel `v7` and gulp `v4`
* Bugfix: escape sequence were transformed into their characters in recent Gutenberg releases

### v1.0.0 ###

* Added: custom css class attributes to generated pre blocks

## PRELIMINARY RELEASE ##

### v0.4.0 ###

* Added: automatically transforms legacy Enlighter codeblocks (Classic Editor) to Gutenberg blocks in case the "Convert to Blocks" function is triggered
* Changed: direction `ltr` is enforced within the editing area - thanks to [nekofar on GitHub](https://github.com/EnlighterJS/Plugin.Gutenberg/pull/9)