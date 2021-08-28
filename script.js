function creatNote() {
    var title = document.getElementById('input').value
    var textContent = document.getElementById('textarea').value

    var notes = document.getElementById('notes')

    var card = document.createElement('div');
    card.setAttribute('class', 'card')
    notes.appendChild(card)

    var cardhead = document.createElement('div')
    cardhead.setAttribute('class', 'card-head')
    card.appendChild(cardhead)

    var titlespan = document.createElement('span')
    titlespan.innerHTML = title
    cardhead.appendChild(titlespan)

    var deleteImg = document.createElement('img')
    deleteImg.setAttribute('src', 'icon-delete-16.png')
    deleteImg.setAttribute('onClick', 'deteleNote(this)')
    cardhead.appendChild(deleteImg)

    var cardcontent = document.createElement('div')
    cardcontent.setAttribute('class', 'card-content')
    card.appendChild(cardcontent)

    var contentspan = document.createElement('span')
    contentspan.innerHTML = textContent
    cardcontent.appendChild(contentspan)

    //reset inputs
    document.getElementById('input').value = ''
    document.getElementById('textarea').value = ''

    closePopup()

}

function deteleNote(img) {
    var toDelete = img
        .parentNode
        .parentNode;
    toDelete.remove()
}

function showPopup() {
    var popup = document.getElementById('popup')
    popup.style.display = 'flex'
}

function closePopup() {
    var popup = document.getElementById('popup')
    popup.style.display = 'none'
}




//////////////////////////////////
var nb = 27
var str1= new String(nb);
var leftt=left(str1);
var rightt=right(str1);
var bn=rightt+leftt
console.log(bn)