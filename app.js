var boxes = document.querySelectorAll('.box')
var xBoxes = document.querySelectorAll('.x')
var oBoxes = document.querySelectorAll('.o')
var restart = document.querySelector('.restart')
var kangaroo = document.querySelector('.x')
var koala = document.querySelector('.o')


var turn = 'x';

var changeBox = function(event) {
    console.log('click is working')
    // debugger
    if (event.target.classList.contains('x') === false && event.target.classList.contains('o') === false) {
         if (turn === 'x') {
            event.target.classList.add('x')
            var kangarooBoxes = document.querySelectorAll('.x')
            console.log(kangarooBoxes)
            var kangaroosTop = document.querySelectorAll('.top.x')
            console.log(kangaroosTop.length)
            turn = 'o'
            // if (kangaroosTop.length === 3) {
            //     console.log('winner')
            // }
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

        var clearBoxes = function() {
            restart.style.display = 'none'
            boxes.forEach(function(animal) {
                animal.classList.remove('x', 'o')
                // koala.classList.remove('o')
            })
        }
        restart.addEventListener('click', clearBoxes)

    }
    // event.target.classList.add('o')
}

boxes.forEach(function(box) {
    box.addEventListener('click', changeBox)
})




// if (turn === 'x') {
    
// } else if (turn === 'o') {
//     var changeBox = function(event) {
//         debugger
//         console.log('click is working')
//         event.target.classList.add('o')
//         turn = 'x'
//         // event.target.classList.add('o')
//     }
    
//     boxes.forEach(function(box) {
//         box.addEventListener('click', changeBox)
//     })
// }


