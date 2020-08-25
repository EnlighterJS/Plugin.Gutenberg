// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {BlockEditor, RichText, Element, Components} from '../../wp';
import _LanguageSelect from '../../components/inspectorcontrols/LanguageSelect';

class EnlighterInlineCodeEdit extends Element.Component{
    constructor(...args){
        super(...args);
    }

    // format block
    createFormat(lang){
        return { 
            type: 'enlighter/richtext-inline',
            attributes: {
                language: lang
            }
        };
    }

    // set element language via dropdown
    onChangeLanguage(lang){
        // apply format to current selection
        this.props.onChange(RichText.applyFormat(
            this.props.value,
            this.createFormat(lang)
        ));
    }

    // toggle format via toolbar (on/off)
    toggleFormatting(){
        // trigger change
        this.props.onChange(RichText.toggleFormat(
            this.props.value,
            this.createFormat('generic')
        ));
    }

    render() {

        // try to get range as reference
        const sel = this.props.isActive && window.getSelection();
        const anchorRef = sel && sel.getRangeAt(0);

        // try to get language attribute
        const currentLanguage = this.props.activeAttributes.language || 'generic';

        return (
            <Element.Fragment>
                <BlockEditor.BlockFormatControls>
                    <BlockEditor.RichTextToolbarButton
                        icon="editor-code"
                        title="Enlighter Inline Code"
                        onClick={this.toggleFormatting.bind(this)}
                        isActive={this.props.isActive}
                    />
                </BlockEditor.BlockFormatControls>
                { this.props.isActive && 
                    <Components.Popover position="bottom center" anchorRef={anchorRef}>
                        <_LanguageSelect 
                            value={currentLanguage}
                            onChange={this.onChangeLanguage.bind(this)}
                        />
                    </Components.Popover> 
                }
            </Element.Fragment>
        );
    }
}

export default {
    title: 'Enlighter Inline Sourcecode',
    tagName: 'code',
    className: 'EnlighterJSRAW',
    edit: EnlighterInlineCodeEdit,
    attributes: {
        language: 'data-enlighter-language'
    }
};