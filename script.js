let time = 25 * 60;
let timerInterval;

const timer = document.getElementById("timer");
const startButton = document.getElementById("startTimer");
const resetButton = document.getElementById("resetTimer");

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timer.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

startButton.addEventListener("click", function () {
    clearInterval(timerInterval);

    timerInterval = setInterval(function () {
        if (time > 0) {
            time--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            alert("Study session complete! 🎉");
        }
    }, 1000);
});

resetButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    time = 25 * 60;
    updateTimer();
});

updateTimer();

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Pehle task likho!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    taskList.appendChild(li);
    taskInput.value = "";
});
