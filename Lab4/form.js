const students = [];
 
function infoForm() {
  const firstName = document.getElementById("FirstName").value.trim();
  const lastName = document.getElementById("LastName").value.trim();
  const studentId = document.getElementById("StudentId").value.trim();
  const email = document.getElementById("Email").value.trim();
  const creditCompleted = document.getElementById("Credit").value.trim();
  const department = document.getElementById("Department").value.trim();
 
  let isValid = true;
 
  const firstNameError = document.getElementById("FirstNameError");
  if (firstName === "") {
    firstNameError.textContent = "Required First Name";
    isValid = false;
  } else {
    firstNameError.textContent = "";
  }
 
  const lastNameError = document.getElementById("LastNameError");
  if (lastName === "") {
    lastNameError.textContent = "Required Last Name";
    isValid = false;
  } else {
    lastNameError.textContent = "";
  }
 
  const emailError = document.getElementById("EmailError");
  if (email === "") {
    emailError.textContent = "Email can not be empty";
    isValid = false;
  } else if (!email.includes("@student.aiub.edu")) {
    emailError.textContent = "Email must contain @student.aiub.edu";
    isValid = false;
  } else {
    emailError.textContent = "";
  }
 
  const idError = document.getElementById("StudentIdError");
  if (studentId === "") {
    idError.textContent = "Id can not be empty";
    isValid = false;
  } else if (!studentId.includes("-")) {
    idError.textContent = "Must include '-'";
    isValid = false;
  } else {
    idError.textContent = "";
  }
 
  const creditError = document.getElementById("CreditError");
  if (creditCompleted === "") {
    creditError.textContent = "Credit is required";
    isValid = false;
  } else {
    const creditValue = Number(creditCompleted);
    if (isNaN(creditValue) || creditValue < 0 || creditValue >= 148) {
      creditError.textContent = "Credit 0 < or > 148";
      isValid = false;
    } else {
      creditError.textContent = "";
    }
  }
 
  const departmentError = document.getElementById("DepartmentError");
  if (department === "") {
    departmentError.textContent = "Department is required";
    isValid = false;
  } else {
    departmentError.textContent = "";
  }
 
  return isValid;
}
 
function Submit(event) {
  event.preventDefault();
 
  const isValid = infoForm();
 
  if (!isValid) {
    return false;
  }
 
  const student = {
    firstName: document.getElementById("FirstName").value.trim(),
    lastName: document.getElementById("LastName").value.trim(),
    studentId: document.getElementById("StudentId").value.trim(),
    email: document.getElementById("Email").value.trim(),
    creditCompleted: document.getElementById("Credit").value.trim(),
    department: document.getElementById("Department").value.trim(),
  };
 
  students.push(student);
  newStudentList();
 
  document.getElementById("RegistrationForm").reset();
  return false;
}
 
function newStudentList() {
  const container = document.getElementById("StudentListContainer");
 
  if (students.length === 0) {
    container.innerHTML = '<p id="noStudent">No Student Registered Yet</p>';
    return;
  }
 
  let html = '<table border="1" class="studentTable"><thead><tr>' +
    "<th>First Name</th>" +
    "<th>Last Name</th>" +
    "<th>Student Id</th>" +
    "<th>Email</th>" +
    "<th>Credit</th>" +
    "<th>Department</th>" +
    "</tr></thead><tbody>";
 
  for (let i = 0; i < students.length; i++) {
    const s = students[i];
    html += "<tr>" +
      "<td>" + s.firstName + "</td>" +
      "<td>" + s.lastName + "</td>" +
      "<td>" + s.studentId + "</td>" +
      "<td>" + s.email + "</td>" +
      "<td>" + s.creditCompleted + "</td>" +
      "<td>" + s.department + "</td>" +
      "</tr>";
  }
 
  html += "</tbody></table>";
  container.innerHTML = html;
}