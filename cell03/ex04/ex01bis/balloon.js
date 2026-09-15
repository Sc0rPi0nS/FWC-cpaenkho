$(document).ready(function() {
    let size = 200;
    let colorIndex = 0;
    const colors = ["red", "green", "blue"];
    $("#balloon").on("click", function() {
        size += 10;
        if (size > 420) {
            size = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % 3;
        }
        balloon.style.width = size + "px";
        balloon.style.height = size + "px";
        balloon.style.backgroundColor = colors[colorIndex];
    });

    $("#balloon").on("mouseleave", function () {
        if (size > 200) {
            size -= 5;
        }
        colorIndex = (colorIndex + 2) % 3;
        balloon.style.width = size + "px";
        balloon.style.height = size + "px";
        balloon.style.backgroundColor = colors[colorIndex];
    });
});
