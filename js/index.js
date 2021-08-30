let html = '', js = '', css = ''

window.editor = monaco.editor.create(document.getElementById('code'), {
    value: 'Empieza creando un nuevo archivo',
    language: '',
    theme: 'vs-dark',
    readOnly: true,
    automaticLayout: true
  });

    

   console.log(editor.getModel())
   
   var model = editor.getModel();
   // we'll create a model for you if the editor created from string value.
   //monaco.editor.setModelLanguage(model, "javascript")
   
   console.log(editor.getModel())

    emmetMonaco.emmetHTML(monaco);
    var winPrint = window.open('about:blank', '_blank');
    
    function save(){
        document.getElementById('output').src = "data:text/html;charset=utf-8," + escape(editor.getValue());
		winPrint.location.reload()
        //winPrint.document.write(editor.getValue());	
        winPrint.document.write(editor.getValue());	
    }
        //document.getElementById('code').getElementsByTagName('textarea')[0].oninput = save

    editor.layout({});

    //return {a:'ajaja'}
    /*
    save()

    function save() {
        html = editor.getValue()
        css = editorCss.getValue()
        js = editorJs.getValue()
        // get the value of the data
    }
    document.getElementById('js').getElementsByTagName('textarea')[0].onblur = save
    document.getElementById('css').getElementsByTagName('textarea')[0].onblur = save
    */
    
//});

//console.log(mona.a)

//editor.setValue('xdd')

var handler = document.querySelector('.handler');
var wrapper = handler.closest('.container');
var boxA = wrapper.querySelector('.box');
var isHandlerDragging = false;

document.addEventListener('mousedown', function(e) {
  // If mousedown event is fired from .handler, toggle flag to true
  if (e.target === handler) {
    isHandlerDragging = true;
  }
});

document.addEventListener('mousemove', function(e) {
  // Don't do anything if dragging flag is false
  if (!isHandlerDragging) {
    return false;
  }

  // Get offset
  var containerOffsetLeft = wrapper.offsetLeft;

  // Get x-coordinate of pointer relative to container
  var pointerRelativeXpos = e.clientX - containerOffsetLeft;
  
  // Arbitrary minimum width set on box A, otherwise its inner content will collapse to width of 0
  var boxAminWidth = 60;

  // Resize box A
  // * 8px is the left/right spacing between .handler and its inner pseudo-element
  // * Set flex-grow to 0 to prevent it from growing
  boxA.style.width = (Math.max(boxAminWidth, pointerRelativeXpos - 8)) + 'px';
  boxA.style.flexGrow = -100;
});

document.addEventListener('mouseup', function(e) {
  // Turn off dragging flag when user mouse is up
  isHandlerDragging = false;
});
