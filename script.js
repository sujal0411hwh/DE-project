// Dummy dataset for the chatbot
const dataset = {
    "hi": "Hello User! I am CKPCET Chatbot. What can I help you?",
    "what are the admission requirements for college": "Student must have completed his/her 12th boards and should have passed all subjects.",
    "how can we apply for college admission": "One can apply through the ACPC website.",
    "does this college accept jee marks": "No, JEE marks are not accepted by this college.",
    "is this college affiliated with gtu": "Yes, this college is affiliated with GTU.",
    "what courses does this college offer": "Courses like B.E in Mechanical Engineering, Computer Engineering, Civil Engineering, Information Technology, and Electrical Engineering are offered by this college.",
    "what is the average class strength": "The average class strength is around 60-70 students.",
    "are there any public transportation options near campus": "Yes, we have college buses available for transportation of the students.",
    "is parking available on campus": "Yes, there is plenty of space available in our college campus for parking purposes.",
    "what are the tuition fees": "The tuition fees for a particular student is ₹44,000 per semester.",
    "are there any additional fees for textbooks or lab fees": "No, there are no additional fees for textbooks or lab.",
    "what are the modes of payment available for tuition fees": "Students can pay their tuition fees through cash, cheque, GPay, etc.",
    "is there any canteen facility in your college": "Yes, there is a canteen facility in the college.",
    "is there a gym or fitness center": "No, there is no gym or fitness center.",
    "what are the transportation options to and from campus": "Yes, the college has private buses from college to ONGC char rasta and vice versa.",
    "are there any sports facilities available in the college": "Yes, there is a badminton court, box cricket, and a cricket ground available for students.",
    "what is the criteria for attendance": "As per GTU, you must have 75% attendance.",
    "does this college provide any scholarships": "Yes, scholarships are provided by MYSY.",
    "are there any lab facilities available in college": "Yes, the college has up-to-date lab facilities.",
    "are any fests organized by this college": "Yes, the college organizes technical fests and cultural fests.",
    "does the college have on-campus hostel options": "Yes, the college has both boys and girls hostels."
};

// Function to clean user input (lowercase and remove punctuation)
function cleanInput(input) {
    return input.toLowerCase().replace(/[^\w\s]/gi, '').trim();
}

// Function to send the message and display the response
function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userMessage = inputField.value.trim();

    if (userMessage !== "") {
        addMessage(userMessage, "user-message");

        // Clean the user input and match it
        const cleanedUserMessage = cleanInput(userMessage);
        const botResponse = dataset[cleanedUserMessage] || "Sorry, I didn't understand that.";

        setTimeout(() => {
            addMessage(botResponse, "bot-message");
        }, 500); // Add a small delay to mimic bot thinking

        inputField.value = ""; // Clear the input field
    }
}

// Function to add a message to the chat
function addMessage(message, className) {
    const chatMessages = document.getElementById("chat-messages");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.innerText = message;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}

// Allow sending message with the Enter key
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
