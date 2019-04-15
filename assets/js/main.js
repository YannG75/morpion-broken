
let choice = document.querySelector('#choice')
let cell = document.querySelectorAll('.play')
let player = 'X'


let baseTable = choice



function nextPlayer(){
    if(player === "X"){
        player = 'O'
    }
    else{
        player= 'X'
    }
}
function checkIfEmpty(el){


    if(el.innerText === '' ){
        el.innerText = player
        el.setAttribute('clicked', player)
    }
    else{
        alert("impossible de jouer ici !")
    }
}


for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function () {
        checkIfEmpty(this)
        nextPlayer()
    })
}

