window.addEventListener("DOMContentLoaded",init)
function init(){
    console.log("init")
    window.elements={
        urls:document.querySelector("#urls"),
        result:document.querySelector("#Computed")
    }
    elements.urls.addEventListener("keydown",listen)
    elements.urls.addEventListener("keyup",listen)
}
function listen(){
    const matcher=new RegExp("((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[\\-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9\\.\\-]+|(?:www\\.|[\\-;:&=\\+\\$,\\w]+@)[A-Za-z0-9\\.\\-]+)((?:\\/[\\+~%\\/\\.\\w\\-_]*)?\\??(?:[\\-\\+=&;%@\\.\\w_]*)#?(?:[\\.\\!\\/\\\\\\w]*))?)","g")
    show(elements.urls.innerText.match(matcher))
}
function show(urls){
    elements.result.innerHTML=urls.map(url=>`<a href="${url}">${url}</a>`).join("<br>")
}