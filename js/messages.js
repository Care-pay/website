function sendEmail() {
  // Get the user input values
  const name = document.getElementsByName("name")[0].value;
  const phone = document.getElementsByName("phone")[0].value;
  const email = document.getElementsByName('email')[0].value;
  const description = document.getElementsByName("description")[0].value;

  // Email subject and body
  const subject = encodeURIComponent("New Inquiry from " + name);
  const body = encodeURIComponent(
    `Hello,\n\nYou have received a new inquiry.\n\nName: ${name}\nPhone: ${phone}\nDescription:\n${description}`
  );

  // Email address (recipient)
  const recipient = "example@domain.com"; // Replace with the actual email address

  // Create the mailto link and open it
  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
}
