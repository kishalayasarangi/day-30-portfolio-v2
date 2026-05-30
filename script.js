const projects = [
  { day: 1, name: "Hello World", desc: "Hello World in Python, JavaScript and C++. The very first commit.", tags: ["python", "javascript", "cpp"], category: "python", repo: "day-01-hello-world" },
  { day: 2, name: "CLI Calculator", desc: "Command-line calculator with all arithmetic operations.", tags: ["python"], category: "python", repo: "day-02-calculator" },
  { day: 3, name: "Number Guessing Game", desc: "Guess a random number between 1–100 in 7 attempts.", tags: ["python"], category: "python", repo: "day-03-number-guessing-game" },
  { day: 4, name: "To-Do List App", desc: "Terminal to-do list with JSON persistence across sessions.", tags: ["python", "json"], category: "python", repo: "day-04-todo-list" },
  { day: 5, name: "Rock Paper Scissors", desc: "Play against the computer with live score tracking.", tags: ["python"], category: "python", repo: "day-05-rock-paper-scissors" },
  { day: 6, name: "HTML Portfolio", desc: "Personal portfolio page built with pure HTML and CSS.", tags: ["html", "css"], category: "web", repo: "day-06-html-portfolio" },
  { day: 7, name: "CSS Landing Page", desc: "Fully styled product landing page for a fictional platform.", tags: ["html", "css"], category: "web", repo: "day-07-css-landing-page" },
  { day: 8, name: "Responsive Navbar", desc: "Navbar with animated hamburger menu for mobile screens.", tags: ["html", "css", "js"], category: "web", repo: "day-08-responsive-navbar" },
  { day: 9, name: "JavaScript Quiz App", desc: "10-question tech quiz with score tracking and feedback.", tags: ["html", "css", "js"], category: "web", repo: "day-09-quiz-app" },
  { day: 10, name: "Weather App", desc: "Weather app with 5-day forecast and °C/°F toggle.", tags: ["html", "css", "js"], category: "web", repo: "day-10-weather-app" },
  { day: 11, name: "Unit Converter", desc: "Convert length, weight, temperature and speed.", tags: ["html", "css", "js"], category: "web", repo: "day-11-unit-converter" },
  { day: 12, name: "Markdown Notes App", desc: "Full-featured notes app with markdown rendering and localStorage.", tags: ["html", "css", "js"], category: "web", repo: "day-12-markdown-notes" },
  { day: 13, name: "Pomodoro Timer", desc: "Productivity timer with SVG ring animation and session tracking.", tags: ["html", "css", "js"], category: "web", repo: "day-13-pomodoro-timer" },
  { day: 14, name: "BMI Calculator", desc: "BMI calculator with health tips and ideal weight range.", tags: ["html", "css", "js"], category: "web", repo: "day-14-bmi-calculator" },
  { day: 15, name: "Random Quote Generator", desc: "Quotes by category with favorites, copy and tweet.", tags: ["html", "css", "js"], category: "web", repo: "day-15-random-quote-generator" },
  { day: 16, name: "Countdown Timer", desc: "Count down to any future date with multiple events.", tags: ["html", "css", "js"], category: "web", repo: "day-16-countdown-timer" },
  { day: 17, name: "Dice Roller", desc: "Roll D4 to D20 with history and stats.", tags: ["html", "css", "js"], category: "web", repo: "day-17-dice-roller" },
  { day: 18, name: "Password Checker", desc: "Live password strength meter with random generator.", tags: ["html", "css", "js"], category: "web", repo: "day-18-password-checker" },
  { day: 19, name: "Expense Tracker", desc: "Track income and expenses by category with charts.", tags: ["html", "css", "js"], category: "web", repo: "day-19-expense-tracker" },
  { day: 20, name: "GitHub Profile Generator", desc: "Generate a beautiful GitHub profile README instantly.", tags: ["html", "css", "js"], category: "web", repo: "day-20-github-profile-generator" },
  { day: 21, name: "Sorting Visualizer", desc: "Animate Bubble, Merge, Selection and Insertion Sort.", tags: ["html", "css", "js", "dsa"], category: "dsa", repo: "day-21-sorting-visualizer" },
  { day: 22, name: "Binary Search Visualizer", desc: "Step by step binary search with left/mid/right pointers.", tags: ["html", "css", "js", "dsa"], category: "dsa", repo: "day-22-binary-search-visualizer" },
  { day: 23, name: "Stack & Queue Visualizer", desc: "Animate push, pop, enqueue and dequeue operations.", tags: ["html", "css", "js", "dsa"], category: "dsa", repo: "day-23-stack-queue-visualizer" },
  { day: 24, name: "Linked List Visualizer", desc: "Insert, delete and search nodes with animation.", tags: ["html", "css", "js", "dsa"], category: "dsa", repo: "day-24-linked-list-visualizer" },
  { day: 25, name: "LeetCode Easy × 10", desc: "Two Sum, Kadane's, Valid Parentheses and 7 more.", tags: ["python", "dsa"], category: "dsa", repo: "day-25-leetcode-easy" },
  { day: 26, name: "File Organizer", desc: "Auto-sort files into folders by type with dry run mode.", tags: ["python"], category: "python", repo: "day-26-file-organizer" },
  { day: 27, name: "Web Scraper", desc: "Scrape quotes.toscrape.com and export to CSV and JSON.", tags: ["python", "api"], category: "api", repo: "day-27-web-scraper" },
  { day: 28, name: "Public API Explorer", desc: "Jokes, NASA, crypto prices, dog photos and country info.", tags: ["html", "css", "js", "api"], category: "api", repo: "day-28-api-explorer" },
  { day: 29, name: "Currency Converter", desc: "Live exchange rates for 30+ currencies.", tags: ["html", "css", "js", "api"], category: "api", repo: "day-29-currency-converter" },
  { day: 30, name: "Portfolio V2", desc: "Updated portfolio with all 30 days of projects.", tags: ["html", "css", "js"], category: "web", repo: "day-30-portfolio-v2" }
];

let currentFilter = 'all';

function filterProjects(category, btn) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const filtered = currentFilter === 'all'
    ? projects
    : projects.filter(p => p.category === currentFilter);

  grid.innerHTML = filtered.map(p => `
    <div class="project-card">
      <div class="project-day">Day ${String(p.day).padStart(2, '0')}</div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <a href="https://github.com/kishalayasarangi/${p.repo}"
         target="_blank" class="project-link">View on GitHub →</a>
    </div>
  `).join('');
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

window.onload = () => renderProjects();
