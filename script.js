// DARK MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }

});


// TASK MANAGER

let tasks = JSON.parse(localStorage.getItem("campusTasks")) || [];

function displayTasks() {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>

            <button
                class="delete-btn"
                onclick="deleteTask(${index})">
                🗑️
            </button>
        `;

        taskList.appendChild(li);

    });

    document.getElementById("taskCount").textContent = tasks.length;
}

function addTask() {

    const input = document.getElementById("taskInput");

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);

    localStorage.setItem(
        "campusTasks",
        JSON.stringify(tasks)
    );

    input.value = "";

    displayTasks();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem(
        "campusTasks",
        JSON.stringify(tasks)
    );

    displayTasks();
}

displayTasks();


// NOTES

let notes = JSON.parse(localStorage.getItem("campusNotes")) || [];

function displayNotes() {

    const notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    notes.forEach((note) => {

        const div = document.createElement("div");

        div.className = "note";

        div.textContent = note;

        notesList.appendChild(div);

    });

    document.getElementById("noteCount").textContent = notes.length;
}

function saveNote() {

    const input = document.getElementById("noteInput");

    const note = input.value.trim();

    if (note === "") {
        alert("Write something first.");
        return;
    }

    notes.push(note);

    localStorage.setItem(
        "campusNotes",
        JSON.stringify(notes)
    );

    input.value = "";

    displayNotes();
}

displayNotes();


// COURSE SEARCH

const searchInput = document.getElementById("courseSearch");

searchInput.addEventListener("input", () => {

    const search = searchInput.value.toLowerCase();

    const courses =
        document.querySelectorAll(".course-card");

    courses.forEach((course) => {

        const text =
            course.textContent.toLowerCase();

        if (text.includes(search)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }

    });

});


// SCROLL TO COURSES

function scrollToCourses() {

    document
        .getElementById("courses")
        .scrollIntoView({
            behavior: "smooth"
        });

}
