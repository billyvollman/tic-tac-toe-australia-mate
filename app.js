var boxes = document.querySelectorAll('.box')
var xBoxes = document.querySelectorAll('.x')
var oBoxes = document.querySelectorAll('.o')
var restart = document.querySelector('.restart')
var kangaroo = document.querySelector('.x')
var koala = document.querySelector('.o')
var tieScore = document.querySelector('.tie.score')
var player1Score = document.querySelector('.one.score')


var turn = 'x';

var changeBox = function(event) {
    console.log('click is working')
    // debugger
    if (event.target.classList.contains('x') === false && event.target.classList.contains('o') === false) {
         if (turn === 'x') {
            event.target.classList.add('x')
            var kangarooBoxes = document.querySelectorAll('.x')
            var kangaroosRowTop = document.querySelectorAll('.top.x')
            var kangaroosRowMiddle = document.querySelectorAll('.middle.x')
            var kangaroosRowBottom = document.querySelectorAll('.bottom.x')
            var kangaroosColumnLeft = document.querySelectorAll('.left.x')
            var kangaroosColumnCenter = document.querySelectorAll('.center.x')
            turn = 'o'
            if (kangaroosRowTop.length === 3) {
                console.log('winner')
                document.querySelector('.p1').classList.add('flash')
                kangaroosRowTop.forEach(function(roo){
                    roo.classList.add('flash')
                })
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosRowMiddle.length === 3) {
                console.log('winner')
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosRowBottom.length === 3) {
                console.log('winner')
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosColumnLeft.length === 3) {
                console.log('winner')
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosColumnCenter.length === 3) {
                console.log('winner')
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } 
        } else if (turn === 'o' ) {
            event.target.classList.add('o')
            turn = 'x'
        } 
    }

    var kangarooBoxes = document.querySelectorAll('.x')
    if (kangarooBoxes.length === 5) {
        console.log('time to reset')
        turn = 'x'
        restart.style.display = 'block'
        tieScore.textContent = Number(tieScore.textContent) + 1
        return

    }
    // event.target.classList.add('o')
}

boxes.forEach(function(box) {
    box.addEventListener('click', changeBox)
})

var clearBoxes = function() {
    restart.style.display = 'none'
    boxes.forEach(function(animal) {
        animal.classList.remove('x', 'o', 'flash')
        // koala.classList.remove('o')
    })
}
restart.addEventListener('click', clearBoxes)

