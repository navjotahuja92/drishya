var pages = ['home', 'grid', 'color', 'elements'];

function loadSidbarItems() {
    var sidebarHTMLString = ''
    pages.forEach(function(page) {
        var itemTeplate = `<div class="item page-link" onClick="loadTargetPage('${page}')" data-page="${page}">${page}</div>`;
        sidebarHTMLString = sidebarHTMLString + itemTeplate;
    })
    document.getElementById('sidebar').innerHTML = sidebarHTMLString;
}

function loadPage(page) {
    var div = document.createElement('div');
    var contentElem = document.getElementById('content');
    contentElem.innerHTML = '';
    contentElem.appendChild(div);
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        div.innerHTML = this.response;
        var loadedScripts = div.getElementsByTagName('script');
        if (loadedScripts.length) {
            eval(loadedScripts[0].innerText)
        }
        showCode();
    };
    xhr.open('GET', page, true);
    xhr.setRequestHeader('Accept', 'html');
    xhr.send();
}

function loadTargetPage(page) {
    var page = 'pages/' + page + '.html';
    loadPage(page);
}

// Load Sidebar Items 
loadSidbarItems();

function showCode() {
    var codeElems = Array.from(document.getElementsByClassName('code-demo'));
    codeElems.forEach(function(elem) {
        var codeElemToBeInserted = document.createElement("pre")
        var codeData = elem.innerHTML.toHtmlEntities();
        var codeHTML = `<code class="language-markup">${codeData}</code>`;
        codeElemToBeInserted.innerHTML = codeHTML;
        elem.parentNode.insertBefore(codeElemToBeInserted, elem)
    });
    Prism.highlightAll()
}
/**
 * Convert a string to HTML entities
 */
String.prototype.toHtmlEntities = function() {
    return this.replace(/./gm, function(s) {
        return "&#" + s.charCodeAt(0) + ";";
    });
};