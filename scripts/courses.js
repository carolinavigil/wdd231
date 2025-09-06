const courses = [
{ code: 'WDD 130', title: 'Web Fundamentals', credits: 2, type: 'WDD', completed: true },
{ code: 'WDD 131', title: 'Dynamic Web Fundamentals', credits: 2, type: 'WDD', completed: true },
{ code: 'WDD 231', title: 'Frontend Web Development I', credits: 3, type: 'WDD', completed: false },
{ code: 'CSE 110', title: 'Intro to Programming', credits: 2, type: 'CSE', completed: true },
{ code: 'CSE 111', title: 'Programming with Functions', credits: 2, type: 'CSE', completed: true },
{ code: 'CSE 210', title: 'Programming with Classes', credits: 2, type: 'CSE', completed: false }
];


const container = document.getElementById('courses');
const creditTotal = document.getElementById('credit-total');
const filterButtons = document.querySelectorAll('.filter');


function render(list) {
container.innerHTML = '';
list.forEach(c => {
const div = document.createElement('div');
div.className = 'course' + (c.completed ? ' completed' : '');
div.innerHTML = `<strong>${c.code}</strong>: ${c.title} (${c.credits} cr.)`;
container.appendChild(div);
});
creditTotal.textContent = list.reduce((sum, c) => sum + c.credits, 0);
}


function applyFilter(type) {
let list = courses;
if (type === 'WDD') list = courses.filter(c => c.type === 'WDD');
if (type === 'CSE') list = courses.filter(c => c.type === 'CSE');
render(list);
}


filterButtons.forEach(btn => {
btn.addEventListener('click', () => {
filterButtons.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
applyFilter(btn.dataset.filter);
});
});


applyFilter('all');