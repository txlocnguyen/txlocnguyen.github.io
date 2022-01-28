const typed = new Typed(".typing", {
    strings: ["Software Developer", "Software Engineer", "Full Stack Developer", "Full Stack Engineer", "Programmer", "Web Developer"],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true
});
const typed2 = new Typed(".typing-2", {
    strings: ["Software Developer.", "Software Engineer.", "Full Stack Developer.", "Full Stack Engineer.", "Programmer.", "Web Developer."],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true
});
const txts = document.querySelector(".animate-text").children,
    txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
    textOutTimer = 2800;

function animateText() {
    for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function () {
        txts[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function () {

        if (index == txtsLen - 1) {
            index = 0;
        } else {
            index++;
        }
        animateText();
    }, textInTimer);
}

window.onload = animateText;