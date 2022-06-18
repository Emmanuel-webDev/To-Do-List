function add(){
    const list = document.createElement("li");
    list.textContent=  document.querySelector('input').value;
    const orderedList = document.querySelector('ol');
    orderedList.appendChild(list);
}
function del(){
    const elem = document.querySelector('li');
    elem.remove();
}