var boxes = document.querySelectorAll('.box')
var xBoxes = document.querySelectorAll('.x')
var oBoxes = document.querySelectorAll('.o')
var restart = document.querySelector('.restart')
var kangaroo = document.querySelector('.x')
var koala = document.querySelector('.o')
var tieTitle = document.querySelector('.tie')
var tieScore = document.querySelector('.tie.score')
var player1Title = document.querySelector('.p1')
var player1Score = document.querySelector('.one.score')


var turn = 'x';

var changeBox = function(event) {
    console.log('click is working')
    if (event.target.classList.contains('x') === false && event.target.classList.contains('o') === false) {
         if (turn === 'x') {
            event.target.classList.add('x')
            var kangarooBoxes = document.querySelectorAll('.x')
            var kangaroosRowTop = document.querySelectorAll('.top.x')
            var kangaroosRowMiddle = document.querySelectorAll('.middle.x')
            var kangaroosRowBottom = document.querySelectorAll('.bottom.x')
            var kangaroosColumnLeft = document.querySelectorAll('.left.x')
            var kangaroosColumnCenter = document.querySelectorAll('.center.x')
            var kangaroosColumnRight = document.querySelectorAll('.right.x')
            var kangarooTopLeft = document.querySelector('.top.left.x')
            var kangarooTopRight = document.querySelector('.top.right.x')
            var kangaroosMiddleCenter = document.querySelector('.middle.center.x')
            var kangaroosBottomLeft = document.querySelector('.bottom.left.x')
            var kangaroosBottomRight = document.querySelector('.bottom.right.x')
            var kangarooTopDiagonal = document.querySelectorAll('.top.left.x').length + document.querySelectorAll('.middle.center.x').length + document.querySelectorAll('.bottom.right.x').length
            var kangarooBottomDiagonal = document.querySelectorAll('.bottom.left.x').length + document.querySelectorAll('.middle.center.x').length + document.querySelectorAll('.top.right.x').length

            turn = 'o'
            if (kangaroosRowTop.length === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                kangaroosRowTop.forEach(function(roo){
                    roo.classList.add('flash')
                })
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosRowMiddle.length === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                kangaroosRowMiddle.forEach(function(roo){
                    roo.classList.add('flash')
                })
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosRowBottom.length === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                kangaroosRowBottom.forEach(function(roo){
                    roo.classList.add('flash')
                })
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosColumnLeft.length === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                kangaroosColumnLeft.forEach(function(roo){
                    roo.classList.add('flash')
                })
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosColumnCenter.length === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                kangaroosColumnCenter.forEach(function(roo){
                    roo.classList.add('flash')
                })
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosColumnRight.length === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                kangaroosColumnRight.forEach(function(roo){
                    roo.classList.add('flash')
                })
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangarooTopDiagonal === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                kangarooTopLeft.classList.add('flash')
                kangaroosMiddleCenter.classList.add('flash')
                kangaroosBottomRight.classList.add('flash')
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
            } else if (kangarooBottomDiagonal === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                kangaroosBottomLeft.classList.add('flash')
                kangaroosMiddleCenter.classList.add('flash')
                kangarooTopRight.classList.add('flash')
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
            }
        } else if (turn === 'o' ) {
            event.target.classList.add('o')
            turn = 'x'
        } 
    }

    var kangarooBoxes = document.querySelectorAll('.x')
    if (kangarooBoxes.length === 5) {
        console.log('time to reset')
        tieTitle.classList.add('flash')
        tieScore.classList.add('flash')
        boxes.forEach(function(box){
            box.classList.add('flash')
        })
        turn = 'x'
        restart.style.display = 'block'
        tieScore.textContent = Number(tieScore.textContent) + 1
        return

    }
}

boxes.forEach(function(box) {
    box.addEventListener('click', changeBox)
})

var clearBoxes = function() {
    restart.style.display = 'none'
    boxes.forEach(function(box) {
        box.classList.remove('x', 'o', 'flash')
    })
    player1Title.classList.remove('flash')
    player1Score.classList.remove('flash')
    tieTitle.classList.remove('flash')
    tieScore.classList.remove('flash')
}
restart.addEventListener('click', clearBoxes)

