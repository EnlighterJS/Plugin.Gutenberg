// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {Editor, Components, Element} from '../../wp';
import _TextEditor from '../../components/TextEditor';
import _LanguageMenu from '../../components/blockcontrols/LanguageMenu';
import _LanguageSelect from '../../components/inspectorcontrols/LanguageSelect';
import _ThemeSelect from '../../components/inspectorcontrols/ThemeSelect';
import {getLanguageLabel} from '../../languages';

// The "edit" property must be a valid function.
export default function edit({attributes, setAttributes}){

    // use standard Gutenberg PlainText View with custom styles
    return <Element.Fragment>

        <Editor.BlockControls>
            <Components.Toolbar>
                <_LanguageMenu 
                    value={attributes.language} 
                    onChange={(language) => setAttributes({language})}
                />
            </Components.Toolbar>
        </Editor.BlockControls>

        <div className="enlighter-block-wrapper">
            <div className="enlighter-header">
                <div className="enlighter-title">{getLanguageLabel(attributes.language)}</div>
            </div>
            <_TextEditor
                value={ attributes.content }
                onChange={(content) => setAttributes({content})}
                placeholder="Insert Sourcecode.."
                aria-label="Code"
            />
            <div className="enlighter-footer">
                <div className="enlighter-footer-label"><strong>EnlighterJS</strong> Syntax Highlighter</div>
            </div>
        </div>

        <Editor.InspectorControls>
            <Components.PanelBody title="Appearance" icon="admin-appearance">
                <p>Override the global plugin settings of the current block.</p>
                <_LanguageSelect 
                    value={attributes.language} 
                    onChange={(language) => setAttributes({language})} 
                />
                <Components.TextControl
                    label="Speciallines"
                    value={attributes.highlight}
                    onChange={(highlight) => setAttributes({highlight})}
                    placeholder="1,2,20-22"
                />
                <Components.TextControl
                    label="Lineoffset"
                    value={attributes.lineoffset}
                    onChange={(lineoffset) => setAttributes({lineoffset})}
                    placeholder="314"
                />
                <_ThemeSelect 
                    value={attributes.theme} 
                    onChange={(theme) => setAttributes({theme})} 
                />
                <Components.RadioControl
                    label="Linenumbers"
                    selected={attributes.linenumbers}
                    options={[
                        {label: 'Global settings', value: '' },
                        {label: 'Show', value: 'true' },
                        {label: 'Hide', value: 'false' }
                    ]}
                    onChange={(linenumbers) => setAttributes({linenumbers})}
                />
            </Components.PanelBody>

            <Components.PanelBody title="Codegroup" initialOpen={false} icon="excerpt-view">
                <p>Create a group of multiple codeblocks by setting a unique group identifier.</p>
                <Components.TextControl
                    label="Title"
                    value={attributes.title}
                    onChange={(title) => setAttributes({title})}
                    placeholder="My Codeblock"
                />
                <Components.TextControl
                    label="Group Identifier"
                    value={attributes.group}
                    onChange={(group) => setAttributes({group})}
                    placeholder="mygroup-1"
                />
            </Components.PanelBody>
        </Editor.InspectorControls>

    </Element.Fragment>
    ;
}