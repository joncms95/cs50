// Run script once DOM
document.addEventListener('DOMContentLoaded', function () {

    // When correct answer is clicked, button color change to green
    let correct = document.querySelector('.correct');
    correct.addEventListener('click', function () {
        correct.style.backgroundColor = 'green';
        document.querySelector('#feedback1').innerHTML = "Chilly's the best!";
    });

    // When incorrect answer is clicked, button color change to red
    let incorrects = document.querySelectorAll('.incorrect');
    for (let i = 0; i < incorrects.length; i++) {
        incorrects[i].addEventListener('click', function () {
            incorrects[i].style.backgroundColor = 'red';
            document.querySelector('#feedback1').innerHTML = 'Bruh...';
        });
    }

    // Check part 2 answer
    document.querySelector('#check').addEventListener('click', function () {
        let input = document.querySelector('input');
        if (input.value == 'Xare') {
            input.style.backgroundColor = 'green';
            document.querySelector('#feedback2').innerHTML = "Xare is also Chilly!\nAnd you know what? Chilly's the best!";
        } else {
            input.style.backgroundColor = 'red';
            document.querySelector('#feedback2').innerHTML = 'X...? :)';
        }
    });
});