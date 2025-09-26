Responsive Landing Page - Internship Task 1

This project is part of the **Web Development Internship**.  
The task was to **create a simple responsive landing page** using only **HTML5** and **CSS3** with Flexbox/Grid and media queries.

---

## 📌 Features
- Clean and minimal landing page design
- Responsive layout that adapts to desktop, tablet, and mobile
- Header with logo and navigation menu (hamburger menu on mobile)
- Hero section with heading, paragraph, and call-to-action button
- Features section using **CSS Grid**
- Footer with social links
- Media queries for responsiveness

---

## 🛠️ Technologies Used
- **HTML5**
- **CSS3**
- **Flexbox & Grid**
- **Media Queries**

---

## 🚀 How to Run the Project
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/landing-page-task1.git #WEBDEVELOPMENTPROJECT

task 2 : 
🌈 Colourful To-Do List Web App

A simple, interactive and colourful To-Do List app built with HTML, CSS, and Vanilla JavaScript.
This app allows users to add, mark complete, delete, filter tasks (All / Active / Completed), and clear all.
Tasks are saved in localStorage, so they remain even after refreshing the page.


---

✨ Features

📝 Add Tasks – Quickly add new tasks using input or Enter key

✅ Mark Complete – Strike-through style with checkbox toggle

❌ Delete Task – Remove a single task instantly

🔍 Filters – View All / Active / Completed tasks

🧹 Clear All – Remove all tasks with one click

🎨 Colourful UI – Gradient background, animated cards, hover effects

💾 Persistent Storage – Saves tasks in browser localStorage



---

📂 Project Structure

.
├── index.html     # Main HTML file (contains CSS + JS in single file)
├── README.md      # Documentation


---

⚙️ Setup & Run

1. Download / copy the project files


2. Open index.html in any modern browser (Chrome, Edge, Firefox, etc.)


3. Start adding tasks 🎉



(No server or installation needed — it’s 100% front-end.)


---

🖥️ Tools Used

HTML5 – Structure

CSS3 – Styling (gradient, animations, responsive design)

JavaScript (Vanilla) – DOM manipulation, event handling, localStorage



---

🔎 How It Works (Step by Step)

1. User enters a task in the input box and clicks Add (+) or presses Enter

A new task object {id, text, done} is created

Task is stored in localStorage and shown on screen



2. Task Rendering

JavaScript dynamically creates <li> items for each task

Completed tasks are shown with a strike-through style



3. Mark Task Complete

When checkbox is clicked, the done property toggles

Task appearance updates instantly (line-through style)

State is saved in localStorage



4. Delete Task

Clicking ❌ removes the selected task from the array

UI refreshes without page reload



5. Filter Tasks

Buttons (All / Active / Completed) update what is displayed

Logic filters tasks before rendering



6. Clear All

Clicking “Clear All” empties the entire task list

localStorage is reset





---

📸 Screenshots

(Add screenshots here → homepage, after adding tasks, filter applied, etc.)


---

🚀 Future Improvements

✏️ Edit tasks inline

📊 Show count of active tasks left

🌙 Dark mode toggle

🎵 Fun sounds/animations when adding/deleting tasks



---

✅ That’s it — simple, interactive, colourful To-Do List app 🚀


TASK 4📱 Responsive Website with CSS Media Queries

🎯 Objective

Convert an existing desktop-only page into a mobile-friendly layout using CSS media queries.

🛠 Tools Used

HTML5

CSS3

JavaScript (for hamburger menu toggle)

Chrome DevTools (for testing responsiveness)

VS Code (for development)


📂 Project Structure

📦 Responsive-Website  
 ┣ 📜 index.html  
 ┣ 📜 style.css  (optional, if you separate CSS)  
 ┣ 📜 script.js  (optional, if you separate JS)  
 ┗ 📜 README.md

✨ Features Implemented

✔ Mobile-first design using media queries
✔ Responsive navigation bar with hamburger menu
✔ Columns stack vertically on smaller screens
✔ Responsive images (max-width: 100%)
✔ Smooth animations & hover effects
✔ No horizontal scrolling / overflow issues

📐 Media Queries Used

/* Tablet & below */
@media (max-width: 768px) {
  /* Nav stacks vertically, layout adjusts */
}

/* Mobile */
@media (max-width: 480px) {
  /* Font size adjusts for readability */
}

🚀 How to Run

1. Open index.html in any modern browser (Chrome recommended).


2. Resize the browser window or press F12 → Toggle Device Toolbar → Test on different devices.


3. The navigation menu will collapse into a hamburger button on smaller screens.



🎬 Demo Walkthrough

On desktop: Navigation bar is horizontal, content is in 2 columns (main + sidebar).

On tablet: Navigation stacks vertically, content stacks vertically.

On mobile: Font size reduces, hamburger menu opens/closes with animation.


📖 Outcome

✅ Grasped CSS media queries

✅ Built mobile-first design

✅ Practiced flexible layouts

✅ Successfully made a desktop-only page mobile-friendly



---