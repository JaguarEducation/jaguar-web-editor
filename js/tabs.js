let registerTabs = []
let actualTab = ''
let tabs = document.getElementById('tabs')

function createTab(name) {
    let tab = document.createElement('div')
    let i = document.createElement('i')
    tab.id = name
    tab.classList.add('tab-item')
    tab.appendChild
    tab.onclick = function () {
        tabOnClick(name)
    } 
    tab.textContent = name
    i.classList.add('codicon')
    i.classList.add('codicon-close')
    i.onclick = function () {
        removeTab(name)
    }
    tab.appendChild(i)
    tabs.appendChild(tab)
    registerTab(name)
    if(actualTab != ''){
        document.getElementById(name).classList.add('tab-item-open')
        document.getElementById(actualTab).classList.remove('tab-item-open')
        actualTab = name
    }
    else {
        actualTab = name
        document.getElementById(name).classList.add('tab-item-open')
    }
    }

function removeTab(name) {
    tabs.removeChild(document.getElementById(name))
    unregisterTab(name)
}

function registerTab(name) {
    registerTabs.push(name)
}

function unregisterTab(name) {
    let index = registerTabs.indexOf(name)
    if (index !== -1) {
        registerTabs.splice(index, 1);
      }
}

function tabOnClick(name) {
    console.log("tab tocada: " + name)
    document.getElementById(name).classList.add('tab-item-open')
    document.getElementById(actualTab).classList.remove('tab-item-open')
    actualTab = name
}

function tabExists(name) {
    if(registerTabs.indexOf(name) !== -1){
        return true
    }
    else {
        return false
    }
}

function controllerTab(name) {
    if(tabExists(name)){
        tabOnClick(name)
    }
    else {
        createTab(name)
    }
}

