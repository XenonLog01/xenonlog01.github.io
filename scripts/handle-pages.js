const doc = document.querySelector('article');
const btns = document.getElementsByTagName('button');
const children = doc.children;
const HOME = 'home';

let selected = HOME;

function init() {
    const tmp = JSON.parse(localStorage.getItem('selected'));
    if (tmp !== '') {
        selected = tmp;
    }

    handleClick(selected, getButton(selected));
}

function handleClick(id, btn) {
    selectedButton(btn.value);
    Array.from(children).forEach(itm => {
        if (itm.id === id) {
            itm.style.display = 'block';
        } else {
            itm.style.display = 'none';
        }
    });
}

function getButton(name) {
    let ret = null
    Array.from(btns).forEach(btn => {
        if (btn.value === name) {
            ret = btn;
        }
    });
    return ret;
}

function selectedButton(name) {
    selected = name;

    Array.from(btns).forEach(btn => {
        if (btn.value === name) {
            btn.id += 'current';
        } else {
            btn.id = '';
        }
    });

    localStorage.setItem('selected', JSON.stringify(selected));
}

init();
