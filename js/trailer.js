const trailer = document.getElementById("trailer");

const text = document.getElementById("text")


const getTrailerClass = type => {
    switch(type) {
        case "summit":
            return "Summit";
        case "sisters_table":
            return "Sisters Cofee Table";
        case "blob":
            return "Blob.";
        case "goducks":
            return "Go Ducks";
        case "sculpture":
            return "Sculpture";
        case "rock_shock":
            return "Rock Shock";
        case "rangefinder":
            return "Range Finder";
        case "dinohead":
            return "Dino Head";
    }
}


// Main
const animateTrailer = (e) => { // interacting
    const x = e.clientX - trailer.offsetWidth / 2, 
        y = e.clientY - trailer.offsetHeight / 2;


    const keyframes = {
    transform: `translate(${x}px, ${y}px)` //scale(${interacting ? 4 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 100,
        fill: "forwards"
    });
}


window.onmousemove = e => {
    const interactable = e.target.closest(".links");
    interacting = interactable !== null;

    animateTrailer(e, interacting)

    // trailer.textContent = interacting ? interactable.textContent : "";

    // if(interacting) {
    //     trailer.textContent = getTrailerClass(interactable.dataset.type);

    // }

}