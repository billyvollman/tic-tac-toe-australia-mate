var boxes = document.querySelectorAll('.box')
var xBoxes = document.querySelectorAll('.x')
var oBoxes = document.querySelectorAll('.o')

var turn = 'x';

var changeBox = function(event) {
    console.log('click is working')
    // debugger
    if (event.target.classList.contains('x') === false && event.target.classList.contains('o') === false) {

        if (turn === 'x') {
            event.target.classList.add('x')
            turn = 'o'
        } else {
            event.target.classList.add('o')
            turn = 'x'
        }

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


