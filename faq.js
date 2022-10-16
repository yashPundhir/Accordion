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
// console.log(faqData[0]);
// console.log(faqData[1]);
// console.log(faqData[2]);
let faq = document.createElement("div");
faq.className = "faq";
document.querySelector(".accordian_body").appendChild(faq);
// ****************************
let faqHeader = document.createElement("div");
faqHeader.className = "faq_header";
document.querySelector(".accordian_body .faq").appendChild(faqHeader);
// ****************************
let faqQues = document.createElement("h3");
document.querySelector(".accordian_body .faq .faq_header").appendChild(faqQues);
faqQues.textContent = faqData[0].question;
// ****************************
let faqBtn = document.createElement("button");
faqBtn.className = "show_btn";
document.querySelector(".accordian_body .faq .faq_header").appendChild(faqBtn);
faqBtn.textContent = "+";
// ****************************
let faqAns = document.createElement("p");
document.querySelector(".accordian_body .faq").appendChild(faqAns);
faqAns.textContent = faqData[0].answer;
faqAns.className = "hidden";

document
	.querySelector(".accordian_body .faq .faq_header .show_btn")
	.addEventListener("click", () => {
		if (faqAns.style.display == "flex") {
			faqAns.style.display = "none";
		} else {
			faqAns.style.display = "flex";
		}
	});
