function createBalloons() {
    let balloonContainer = document.getElementById("balloonContainer");

    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.innerHTML = "🎈";
        balloon.style.left = Math.random() * 100 + "vw";  
        balloon.style.animationDuration = (3 + Math.random() * 2) + "s";
        balloonContainer.appendChild(balloon);
    }
}

document.getElementById("giftBox").addEventListener("click", function() {
    document.getElementById("giftBox").style.display = "none";
    createBalloons();
    document.getElementById("cakeContainer").style.display = "block"; 
});

document.getElementById("candle").addEventListener("click", function() {
    document.getElementById("flame").style.display = "none"; 
    document.getElementById("cakeContainer").style.display = "none"; 
    document.getElementById("balloonContainer").style.display = "none"; 
    document.getElementById("message").style.display = "block"; 
});
