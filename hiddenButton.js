function generateButtons() {
    const num = parseInt(document.getElementById('numButtons').value, 10);

    const correctButton = Math.floor(Math.random() * num) + 1;

    const container = document.querySelector("div");
    
    for (let i = 1; i <= num; ++i) {
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
