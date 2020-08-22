// wrapper..

/*eslint no-undef: 0 */
const _editorConfig = EnlighterJS_EditorConfig;

// get list of available themes
export function getThemes(){

    // add default theme (selected globally)
    const themes = {
        '': 'Global settings (' + _editorConfig.config.theme + ')'
    };

    // add themes from config
    Object.assign(themes, _editorConfig.themes);

    return themes;
}

// get list of available languages
export function getLanguages(){
    const languages = {};

    // add languages from config
    Object.assign(languages, _editorConfig.languages);

    return languages;
}

// global plugin config
export function getGlobalConfig(){
    return _editorConfig.config;
}

