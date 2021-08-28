let html = '', js = '', css = ''

require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' } });
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

let proxy = URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`], { type: 'text/javascript' }));

require(["vs/editor/editor.main"], function () {
    let editorHtml = monaco.editor.create(document.getElementById('html'), {
        value: [
            '<button onclick="hi()">',
            '\tClick me',
            '</button>'
        ].join('\n'),
        language: 'html',
        theme: 'vs-dark'
    });
    let editorCss = monaco.editor.create(document.getElementById('css'), {
        value: [
            'body {',
            '\tmargin: 0;',
            '\tpadding: 0;',
            '}'
        ].join('\n'),
        language: 'css',
        theme: 'vs-dark'
    });
    let editorJs = monaco.editor.create(document.getElementById('js'), {
        value: [
            'function hi() {',
            '\tconsole.log("Hello world!");',
            '}'
        ].join('\n'),
        language: 'javascript',
        theme: 'vs-dark'
    });
    
    save()

    function save() {
        html = editorHtml.getValue()
        css = editorCss.getValue()
        js = editorJs.getValue()
        // get the value of the data
        document.getElementById('output').src = "data:text/html;charset=utf-8," + escape(`<html><style>${css}</style><body>${html}</body><script>${js}</script></html>`);
    }
    document.getElementById('html').getElementsByTagName('textarea')[0].onblur = save
    document.getElementById('js').getElementsByTagName('textarea')[0].onblur = save
    document.getElementById('css').getElementsByTagName('textarea')[0].onblur = save
    
});

function cssPanel() {
    if(document.getElementById('css'))
    document.getElementById('css').classList.add('d-none')
}