
function truncate(str, maxlength){
    if (str.length > maxlength){
        return str.substr(0, maxlength - "...".length) + "...";
    } else {
        return str;
    }
}
let dd = document.querySelectorAll('Acards');
let elements = document.querySelectorAll('p');
for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML = truncate(elements[i].innerHTML,40);
}