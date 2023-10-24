Fancybox.bind("[data-fancybox]", {
    // Your custom options
})

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');

        } else { change.target.classList.remove('element-show'); }
    });
}
let options = {
    threshold: [0.2]
};


let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
let elementsAnimationRight = document.querySelectorAll('.element-animation-right');
let elementsAnimationLeft = document.querySelectorAll('.element-animation-left');

function animationElement(elements) {
    for (let elm of elements) {
        observer.observe(elm);
    }
}

if (elements) {
    animationElement(elements);
}


if (elementsAnimationRight) {
    animationElement(elementsAnimationRight);
}

if(elementsAnimationLeft){
    animationElement(elementsAnimationLeft);
}