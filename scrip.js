let currentLight = 0; 
const lights = document.querySelectorAll('.light');

function changeLight() {
 
    lights.forEach(light => {
        light.style.opacity = 0.2;
    });

    lights[currentLight].style.opacity = 1;

    currentLight = (currentLight + 1) % lights.length;
}

setInterval(changeLight, 2000);