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
var player2Title = document.querySelector('.p2')
var player2Score = document.querySelector('.two.score')

var turn = 'x';

if (turn === 'x') {
    player1Title.classList.add('turn')
    player1Title.textContent = 'Player 1 🦘\n turn'
}

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
            var kangarooMiddleCenter = document.querySelector('.middle.center.x')
            var kangarooBottomLeft = document.querySelector('.bottom.left.x')
            var kangarooBottomRight = document.querySelector('.bottom.right.x')
            var kangaroosTopDiagonal = document.querySelectorAll('.top.left.x').length + document.querySelectorAll('.middle.center.x').length + document.querySelectorAll('.bottom.right.x').length
            var kangaroosBottomDiagonal = document.querySelectorAll('.bottom.left.x').length + document.querySelectorAll('.middle.center.x').length + document.querySelectorAll('.top.right.x').length
            
            player1Title.classList.remove('turn')
            player1Title.textContent = 'Player 1 🦘'
            turn = 'o'
            player2Title.classList.add('turn')
            player2Title.textContent = 'Player 2 🐨\n turn'
            if (kangaroosRowTop.length === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                player1Title.classList.add('winnerText')
                player1Title.textContent = 'Player 1 🦘\n winner'
                player2Title.classList.remove('turn')
                player2Title.textContent = 'Player 2 🐨'
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
                player1Title.classList.add('winnerText')
                player1Title.textContent = 'Player 1 🦘\n winner'
                player2Title.classList.remove('turn')
                player2Title.textContent = 'Player 2 🐨'
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
                player1Title.classList.add('winnerText')
                player1Title.textContent = 'Player 1 🦘\n winner'
                player2Title.classList.remove('turn')
                player2Title.textContent = 'Player 2 🐨'
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
                player1Title.classList.add('winnerText')
                player1Title.textContent = 'Player 1 🦘\n winner'
                player2Title.classList.remove('turn')
                player2Title.textContent = 'Player 2 🐨'
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
                player1Title.classList.add('winnerText')
                player1Title.textContent = 'Player 1 🦘\n winner'
                player2Title.classList.remove('turn')
                player2Title.textContent = 'Player 2 🐨'
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
                player1Title.classList.add('winnerText')
                player1Title.textContent = 'Player 1 🦘\n winner'
                player2Title.classList.remove('turn')
                player2Title.textContent = 'Player 2 🐨'
                kangaroosColumnRight.forEach(function(roo){
                    roo.classList.add('flash')
                })
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (kangaroosTopDiagonal === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                player1Title.classList.add('winnerText')
                player1Title.textContent = 'Player 1 🦘\n winner'
                player2Title.classList.remove('turn')
                player2Title.textContent = 'Player 2 🐨'
                kangarooTopLeft.classList.add('flash')
                kangarooMiddleCenter.classList.add('flash')
                kangarooBottomRight.classList.add('flash')
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
            } else if (kangaroosBottomDiagonal === 3) {
                console.log('winner')
                player1Title.classList.add('flash')
                player1Score.classList.add('flash')
                player1Title.classList.add('winnerText')
                player1Title.textContent = 'Player 1 🦘\n winner'
                player2Title.classList.remove('turn')
                player2Title.textContent = 'Player 2 🐨'
                kangarooBottomLeft.classList.add('flash')
                kangarooMiddleCenter.classList.add('flash')
                kangarooTopRight.classList.add('flash')
                player1Score.textContent = Number(player1Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
            }
        } else if (turn === 'o' ) {
            event.target.classList.add('o')
            player2Title.classList.remove('turn')
            player2Title.textContent = 'Player 2 🐨'
            turn = 'x'
            player1Title.classList.add('turn')
            player1Title.textContent = 'Player 1 🦘\n turn'
            var koalasRowTop = document.querySelectorAll('.top.o')
            var koalasRowMiddle = document.querySelectorAll('.middle.o')
            var koalasRowBottom = document.querySelectorAll('.bottom.o')
            var koalasColumnLeft = document.querySelectorAll('.left.o')
            var koalasColumnCenter = document.querySelectorAll('.center.o')
            var koalasColumnRight = document.querySelectorAll('.right.o')
            var koalaTopLeft = document.querySelector('.top.left.o')
            var koalaTopRight = document.querySelector('.top.right.o')
            var koalaMiddleCenter = document.querySelector('.middle.center.o')
            var koalaBottomLeft = document.querySelector('.bottom.left.o')
            var koalaBottomRight = document.querySelector('.bottom.right.o')
            var koalasTopDiagonal = document.querySelectorAll('.top.left.o').length + document.querySelectorAll('.middle.center.o').length + document.querySelectorAll('.bottom.right.o').length
            var koalasBottomDiagonal = document.querySelectorAll('.bottom.left.o').length + document.querySelectorAll('.middle.center.o').length + document.querySelectorAll('.top.right.o').length

            if (koalasRowTop.length === 3) {
                console.log('winner')
                player2Title.classList.add('flash')
                player2Score.classList.add('flash')

                player2Title.classList.add('winnerText')
                player2Title.textContent = 'Player 2 🐨\n winner'
                player1Title.classList.remove('turn')
                player1Title.textContent = 'Player 1 🦘'

                koalasRowTop.forEach(function(koala){
                    koala.classList.add('flash')
                })
                player2Score.textContent = Number(player2Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (koalasRowMiddle.length === 3) {
                console.log('winner')
                player2Title.classList.add('flash')
                player2Score.classList.add('flash')
                player2Title.classList.add('winnerText')
                player2Title.textContent = 'Player 2 🐨\n winner'
                player1Title.classList.remove('turn')
                player1Title.textContent = 'Player 1 🦘'
                koalasRowMiddle.forEach(function(koala){
                    koala.classList.add('flash')
                })
                player2Score.textContent = Number(player2Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (koalasRowBottom.length === 3) {
                console.log('winner')
                player2Title.classList.add('flash')
                player2Score.classList.add('flash')
                player2Title.classList.add('winnerText')
                player2Title.textContent = 'Player 2 🐨\n winner'
                player1Title.classList.remove('turn')
                player1Title.textContent = 'Player 1 🦘'
                koalasRowBottom.forEach(function(koala){
                    koala.classList.add('flash')
                })
                player2Score.textContent = Number(player2Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (koalasColumnLeft.length === 3) {
                console.log('winner')
                player2Title.classList.add('flash')
                player2Score.classList.add('flash')
                player2Title.classList.add('winnerText')
                player2Title.textContent = 'Player 2 🐨\n winner'
                player1Title.classList.remove('turn')
                player1Title.textContent = 'Player 1 🦘'
                koalasColumnLeft.forEach(function(koala){
                    koala.classList.add('flash')
                })
                player2Score.textContent = Number(player2Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (koalasColumnCenter.length === 3) {
                console.log('winner')
                player2Title.classList.add('flash')
                player2Score.classList.add('flash')
                player2Title.classList.add('winnerText')
                player2Title.textContent = 'Player 2 🐨\n winner'
                player1Title.classList.remove('turn')
                player1Title.textContent = 'Player 1 🦘'
                koalasColumnCenter.forEach(function(koala){
                    koala.classList.add('flash')
                })
                player2Score.textContent = Number(player2Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (koalasColumnRight.length === 3) {
                console.log('winner')
                player2Title.classList.add('flash')
                player2Score.classList.add('flash')
                player2Title.classList.add('winnerText')
                player2Title.textContent = 'Player 2 🐨\n winner'
                player1Title.classList.remove('turn')
                player1Title.textContent = 'Player 1 🦘'
                koalasColumnRight.forEach(function(koala){
                    koala.classList.add('flash')
                })
                player2Score.textContent = Number(player2Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
                return
            } else if (koalasTopDiagonal === 3) {
                console.log('winner')
                player2Title.classList.add('flash')
                player2Score.classList.add('flash')
                koalaTopLeft.classList.add('flash')
                koalaMiddleCenter.classList.add('flash')
                koalaBottomRight.classList.add('flash')
                player2Title.classList.add('winnerText')
                player2Title.textContent = 'Player 2 🐨\n winner'
                player1Title.classList.remove('turn')
                player1Title.textContent = 'Player 1 🦘'
                player2Score.textContent = Number(player2Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
            } else if (koalasBottomDiagonal === 3) {
                console.log('winner')
                player2Title.classList.add('flash')
                player2Score.classList.add('flash')
                koalaBottomLeft.classList.add('flash')
                koalaMiddleCenter.classList.add('flash')
                koalaTopRight.classList.add('flash')
                player2Title.classList.add('winnerText')
                player2Title.textContent = 'Player 2 🐨\n winner'
                player1Title.classList.remove('turn')
                player1Title.textContent = 'Player 1 🦘'
                player2Score.textContent = Number(player2Score.textContent) + 1
                turn = 'x'
                restart.style.display = 'block'
            }
        } 
    }

    var kangarooBoxes = document.querySelectorAll('.x')
    if (kangarooBoxes.length === 5) {
        console.log('time to reset')
        player1Title.textContent = 'Player 1 🦘'
        player2Title.textContent = 'Player 2 🐨'
        player1Title.classList.remove('turn')
        player2Title.classList.remove('turn')
        tieTitle.classList.add('flash')
        tieTitle.classList.add('winnerText')
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
    player2Title.classList.remove('flash')
    player2Score.classList.remove('flash')
    tieTitle.classList.remove('flash')
    tieScore.classList.remove('flash')
    tieTitle.classList.remove('winnerText')
    player1Title.classList.remove('winnerText')
    player2Title.classList.remove('winnerText')
    player1Title.classList.add('turn')
    player1Title.textContent = 'Player 1 🦘\n turn'
    player2Title.textContent = 'Player 2 🐨'
}
restart.addEventListener('click', clearBoxes)

