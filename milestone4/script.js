var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    // Get the values from the form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value;
    // Build the resume content HTML
    var resumeContent = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span contenteditable =\"true\"> ".concat(name, " </span> </p>\n        <p><strong>Email:</strong>  <span contenteditable =\"true\"> ").concat(email, " </span> </p>\n        <p><strong>Contact:</strong> <span contenteditable =\"true\"> ").concat(number, " </span> </p>\n        <p><strong>Education:</strong>  <span contenteditable =\"true\"> ").concat(education, " </span> </p>\n        <p><strong>Work Experience:</strong> <span contenteditable =\"true\"> ").concat(workExperience, " </span> </p>\n        <p><strong>Skills:</strong> <span contenteditable =\"true\"> ").concat(skills, " </span> </p>\n    ");
    // Insert the resume content into the output div
    document.getElementById("resumeOutput").innerHTML = resumeContent;
});
