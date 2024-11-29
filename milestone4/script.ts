document.getElementById("resumeForm")?.addEventListener("submit", function (event: Event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form inputs
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const number = (document.getElementById("number") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Build the resume content HTML
    const resumeContent = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span contenteditable ="true"> ${name} </span> </p>
        <p><strong>Email:</strong>  <span contenteditable ="true"> ${email} </span> </p>
        <p><strong>Contact:</strong> <span contenteditable ="true"> ${number} </span> </p>
        <p><strong>Education:</strong>  <span contenteditable ="true"> ${education} </span> </p>
        <p><strong>Work Experience:</strong> <span contenteditable ="true"> ${workExperience} </span> </p>
        <p><strong>Skills:</strong> <span contenteditable ="true"> ${skills} </span> </p>
    `;

    // Insert the resume content into the output div
    document.getElementById("resumeOutput")!.innerHTML = resumeContent;
});
