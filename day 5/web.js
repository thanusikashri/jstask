function register() {
  try {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();

    if (!name || !email || !age) throw "Please fill all fields";
    age = Number(age);
    if (age < 12) throw "Not eligible! (age must be greater than 12)";

    let student = { name, email, age };
    localStorage.setItem("student", JSON.stringify(student)); 

    document.getElementById("registeroutput").innerText = "Registered successfully!";
    document.getElementById("quizbtn").hidden = false;
  } catch (err) {
    document.getElementById("registeroutput").innerText = err;
    document.getElementById("quizbtn").hidden = true;
  }
}

function quiz() {
  let student = JSON.parse(localStorage.getItem("student")) || {};
  let score = 0;

  let answer = {
    q1: "b", q2: "c", q3: "c", q4: "b", q5: "c",
    q6: "d", q7: "a", q8: "b", q9: "c", q10: "b"
  };

  for (let q in answer) {
    let selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answer[q]) score++;
  }

  let timestamp = new Date();
  let percentage = (score / 5) * 100;
  let grade =
    percentage >= 90 ? "A" :
    percentage >= 75 ? "B" :
    percentage >= 50 ? "C" : "NO GRADE";

  student.score = score;
  student.percentage = percentage;
  student.grade = grade;
  student.timestamp = timestamp;

  localStorage.setItem("student", JSON.stringify(student)); 

  document.getElementById("resultoutput").innerText = "Please wait, calculating your result...";
  new Promise((resolve) => setTimeout(resolve, 2500)).then(() => {
    document.getElementById("resultoutput").innerText =
      `Total Score = ${score}/10\nGrade: ${grade}\nTimestamp: ${timestamp}`;
  });
}

function showJSON() {
  let student = JSON.parse(localStorage.getItem("student")) || {};
  document.getElementById("jsonOutput").innerText = JSON.stringify(student, null, 2);
}
