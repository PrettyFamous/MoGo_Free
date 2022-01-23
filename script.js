"use strict"
window.onload = function() {
    let buttons = document.querySelectorAll(".accordion__header")
    
    for (let btn in buttons) {
        btn.addEventListener("click", switcher);
    }

    function switcher() {
        if (this.classList.contains(".active"))
            this.classList.remove(".active")
    }
}