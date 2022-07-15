const doc = document.querySelector('article');
const btns = document.getElementsByTagName('button');
const articleElem = document.getElementById('article-page');

const children = doc.children;
const articles = articleElem.children;
const articleButtons = document.getElementsByClassName('article-button');

let selected = 'home';
let initArticle = 'article-home';

function init() {
    const tmp = JSON.parse(localStorage.getItem('selected'));
    selected = tmp || 'home';

    handleClick(selected, getButton(selected));
    handleArticleClick(initArticle, getButton(initArticle));
}

function handleArticleClick(id, btn) {
    selectArticleButton(btn);
    Array.from(articles).forEach(itm => {
        if (itm.id === id) {
            itm.style.display = 'block';
        } else {
            itm.style.display = 'none';
        }
    });

}

function selectArticleButton(button) {
    Array.from(articleButtons).forEach(btn => {
        if (btn.value === button.value) {
            btn.id += 'active';
        } else {
            btn.id = '';
        }
    });
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
