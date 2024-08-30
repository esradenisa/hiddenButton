function generateButtons() {
    
    let num = parseInt(document.getElementById('numButtons').value, 10);

    var correctButton = Math.floor(Math.random() * num) + 1;

    var container = document.querySelector("div");
    
    for (var i = 1; i <= num; i++) {
        var button = document.createElement("button");
        button.textContent = "Buton " + i;
        container.appendChild(button);
    
        button.addEventListener("click", function() {
            if (this.textContent === "Buton " + correctButton) {
                alert("Ai castigat!");
            } else {
                alert("Ai pierdut!");
            }
        });
    }

    container.appendChild(button);
}