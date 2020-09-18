// main.js

const test = document.getElementById('listen');

// console.log(test);

test.addEventListener('click', handleClick)

function handleClick(e) {
    console.log(e)
    const t2 = document.getElementById("t2");

    if (t2.firstChild.nodeValue == "three") {
        t2.firstChild.nodeValue = "two";
    } else {
        t2.firstChild.nodeValue = "three";
    }
}



















