function parse() {
    codetext = document.getElementById('code').value;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(codetext, "text/xml");
    //console.log(xmlDoc);
    //console.log(xmlDoc.getElementsByTagName('parsererror').length );
    if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
        htmlcontent = xmlDoc.getElementsByTagName('parsererror')[0].innerHTML;
        htmlcontent = htmlcontent.replace("<h3 xmlns=\"http://www.w3.org/1999/xhtml\">Below is a rendering of the page up to the first error.</h3>", "");
        document.getElementById('bodytag').innerHTML = htmlcontent;
    } else {
        document.getElementById('bodytag').innerHTML = "Parsed With No Errors";
    }
}

window.onload = function () {
    document.getElementById('parse').onclick = parse;
};
