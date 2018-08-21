// wrapper..

/*eslint no-undef: 0 */
const _editorConfig = EnlighterJS_EditorConfig;

// get list of available themes
export function getThemes(){

    // add default theme (selected globally)
    const themes = {
        '': 'Global settings (' + _editorConfig.config.theme + ')'
    };

    // swap key/values 
    Object.keys(_editorConfig.themes).forEach(label => {
        themes[_editorConfig.themes[label]] = label;
    });

    return themes;
}

// get list of available languages
export function getLanguages(){
    const languages = {};

    // swap key/values 
    Object.keys(_editorConfig.languages).forEach(label => {
        languages[_editorConfig.languages[label]] = label;
    });

    return languages;
}

// global plugin config
export function getGlobalConfig(){
    return _editorConfig.config;
}

