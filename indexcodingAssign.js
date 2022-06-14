/*let button = document.getElementById('btn');
let content = document.getElementById('content');
//document.getElementById('content').innerHTML = 'Goodbye.';//
button.addEventListener('click', () => {
    if (content.innerHTML == 'Goodbye.'){
        content.innerHTML = 'Hello.'
    } else {
        content.innerHTML = 'Goodbye.'
    }
});*/

let id = 0;

document.getElementById('add').addEventListener('click', () => {
    /*let createdDate = new Date();*/
    let table = document.getElementById('schedule');
    let row = table.insertRow(3);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('add-date').value;
    row.insertCell(1).innerHTML = document.getElementById('add-time').value;
    row.insertCell(2).innerHTML = document.getElementById('add-home').value;
    row.insertCell(3).innerHTML = document.getElementById('add-away').value;
    row.insertCell(4).innerHTML = document.getElementById('add-networks').value;
    row.insertCell(5).innerHTML = document.getElementById('add-score').value;
    /*row.insertCell(6).innerHTML = document.getElementById('add-actions').value;*/

    let actions = row.insertCell(6);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('add-date').value = '';
    document.getElementById('add-time').value = '';
    document.getElementById('add-home').value = '';
    document.getElementById('add-away').value = '';
    document.getElementById('add-networks').value = '';
    document.getElementById('add-score').value = '';
    document.getElementById('add-actions').value = '';
})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
