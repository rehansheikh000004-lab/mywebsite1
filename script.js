// =========================
// DARK MODE TOGGLE
// =========================
const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  if (darkModeBtn) darkModeBtn.textContent = "☀️ Light Mode";
}

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.textContent = "☀️ Light Mode";
      localStorage.setItem("darkMode", "enabled");
    } else {
      darkModeBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem("darkMode", "disabled");
    }
  });
}

// =========================
// FORM VALIDATION (Contact Page)
// =========================
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name.length < 3) {
      showMessage("⚠️ Name must be at least 3 characters.", "red");
      return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      showMessage("⚠️ Please enter a valid email address.", "red");
      return;
    }

    if (message.length < 10) {
      showMessage("⚠️ Message must be at least 10 characters.", "red");
      return;
    }

    showMessage("✅ Message sent successfully!", "green");
    form.reset();
  });
}

function showMessage(msg, color) {
  if (!formMessage) return;
  formMessage.style.color = color;
  formMessage.textContent = msg;

  if (color === "green") {
    setTimeout(() => {
      formMessage.textContent = "";
    }, 3000);
  }
}

// =========================
// DIGITAL CLOCK
// =========================
function updateClock() {
  const clock = document.getElementById("clock");
  if (clock) {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    clock.textContent = ${hours}:${minutes}:${seconds};
  }
}
setInterval(updateClock, 1000);
updateClock();

// =========================
// TO-DO LIST APP
// =========================
const addTaskBtn = document.getElementById("addTaskBtn");
if (addTaskBtn) {
  addTaskBtn.addEventListener("click", addTask);
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (!input || !taskList) return;

  let taskText = input.value.trim();
  if (taskText === "") {
    alert("⚠️ Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  // Mark as done
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggle
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
}
