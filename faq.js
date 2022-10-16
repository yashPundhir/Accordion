//main object containing all the required info
const faqData = [
	{
		id: 1,
		question: "Who are we?",
		answer:
			"We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
	},
	{
		id: 2,
		question: "What do we do?",
		answer:
			"Building learning communities with Our Affordable & Competent Courses",
	},
	{
		id: 3,
		question: "Are the community classes boring?",
		answer: "No, not at all!!!",
	},
];

const accordianBody = 0;
const faqs = [];

function showFaq() {}

function createFaq() {}

function btnStatusUpdate() {}

let faq = []; // Empty array for 3 different FAQs
let faqHeader = []; //Empty array for 3 different FAQ Headers
let faqQues = []; // Empty array for 3 different FAQ Questions
let faqBtn = []; // Empty array for 3 different FAQ Buttons
let faqAns = []; // Empty array for 3 different FAQ Answers

// Loop to perform the required functionality for each FAQ
for (let i = 0; i < 3; i = i + 1) {
	//to create FAQ Section
	faq.push(document.createElement("div"));
	faq[i].className = "faq";
	document.querySelector(".accordian_body").appendChild(faq[i]);
	// to create FAQ Header Section
	faqHeader.push(document.createElement("div"));
	faqHeader[i].className = "faq_header";
	document
		.querySelectorAll(".accordian_body .faq")
		[i].appendChild(faqHeader[i]);
	// to create FAQ Question
	faqQues.push(document.createElement("h3"));
	document
		.querySelectorAll(".accordian_body .faq .faq_header")
		[i].appendChild(faqQues[i]);
	faqQues[i].textContent = faqData[i].question;
	// to create FAQ Button
	faqBtn.push(document.createElement("button"));
	faqBtn[i].className = "show_btn";
	document
		.querySelectorAll(".accordian_body .faq .faq_header")
		[i].appendChild(faqBtn[i]);
	faqBtn[i].textContent = "+";
	// to create FAQ Answer
	faqAns.push(document.createElement("p"));
	document.querySelectorAll(".accordian_body .faq")[i].appendChild(faqAns[i]);
	faqAns[i].textContent = faqData[i].answer;
	faqAns[i].className = "hidden";
	// to add click event listener on each FAQ Button to perform the required functionality
	document
		.querySelectorAll(".accordian_body .faq .faq_header .show_btn")
		[i].addEventListener("click", () => {
			if (faqAns[i].style.display == "flex") {
				faqAns[i].style.display = "none";
			} else {
				faqAns[i].style.display = "flex";
			}
		});
}
