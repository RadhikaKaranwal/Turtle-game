let weight = 5; // starting weight
const turtle = document.getElementById('turtle');
const weightDisplay = document.getElementById('weightDisplay');
const eatGlassBtn = document.getElementById('eatGlassBtn');
const bugsArea = document.getElementById('bugsArea');

eatGlassBtn.addEventListener('click', () => {
    weight += 1; // Each glass gives +1kg
    weightDisplay.textContent = `Weight: ${weight} kg`;
    turtle.style.width = (150 + (weight - 5) * 5) + 'px'; // Turtle grows!

    if (weight >= 20) {
        finishBugs();
    }
});

function finishBugs() {
    eatGlassBtn.disabled = true;
    bugsArea.style.display = 'block';
    bugsArea.innerHTML = '';

    // Create 10 bugs
    for (let i = 0; i < 10; i++) {
        const bug = document.createElement('div');
        bug.classList.add('bug');
        bug.addEventListener('click', () => {
            bug.remove();
        });
        bugsArea.appendChild(bug);
    }
}

