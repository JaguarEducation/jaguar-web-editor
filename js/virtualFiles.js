let tree = document.getElementById('tree');
let documentOpened = ''


function newFile() {
    let name = prompt('Escribe el nombre del archivo');
    event.preventDefault()
    console.log(name);
    if (name == null) {
        return
    }
    else {
        createFile(name)
    }
}

function createFile(name) {
    let p = document.createElement('p')
    p.textContent = name
    name = name.split('.').join("");
    eval('window.' + name + '= ""');
    p.classList.add('file')
    p.addEventListener('mouseenter', function(e){
        p.classList.add('file-hover')
    })
    p.addEventListener('mouseleave', function(e){
        p.classList.remove('file-hover')
    })
    p.onclick = function () {
        console.log(p.textContent.split('.').join(""))
        console.log(eval(p.textContent.split('.').join("")))
        //console.log(p.textContent.split('.').pop())
        //console.log(name)
        setLang(p.textContent.split('.').pop())
        editor.setValue(eval(p.textContent.split('.').join("")));
        editor.updateOptions({ readOnly: false, });
        documentOpened = p.textContent.split('.').join("")
        controllerTab(p.textContent.split('.').join(""))
    }
    tree.appendChild(p)
}

function setContent() {
    editor.setValue('aaa')
}

function setLang(ext) {
    switch (ext) {
        case 'html':
            var model = editor.getModel();
            monaco.editor.setModelLanguage(model, "html")
            break;
        case 'css':
            var model = editor.getModel();
            monaco.editor.setModelLanguage(model, "css")
            break;
        case 'js':
            var model = editor.getModel();
            monaco.editor.setModelLanguage(model, "javascript")
            break;

        default:
            var model = editor.getModel();
            monaco.editor.setModelLanguage(model, "")
            break;
    }
}

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
        // Prevent the Save dialog to open
        e.preventDefault();
        // Place your code here
        console.log('CTRL + S');
        console.log(documentOpened)
        var editorValue = editor.getValue()
        console.log(editor.getValue())
        eval(documentOpened + " = " + '`' + editorValue + '`')
        console.log(eval(documentOpened))
        save()
    }
});