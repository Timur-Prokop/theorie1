function startTest() {
      window.location.href = 'test.html'; 
    }

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');

    // Открытие меню
    menuBtn.addEventListener('click', function() {
        mobileMenu.style.display = 'flex';
    });

    // Закрытие меню
    closeBtn.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
    });

    // Закрытие при клике на ссылку
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
});


const TEST_SIZE = 21;
const TOTAL_SECONDS = 30 * 60;

let questionsInTest = [];
let currentIndex = 0;

let remainingSeconds = TOTAL_SECONDS;
let timerId = null;

let isSubmitted = false;

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${pad2(m)}:${pad2(s)}`;
}

function el(id) {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Missing element #${id}`);
  return node;
}

function loadQuestions() {
  const data = window.questions;

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error(
      "Вопросы не найдены. Проверь, что в upload.js есть window.questions = [...] и что upload.js подключён перед test.js"
    );
  }

  const picked = shuffle(data).slice(0, TEST_SIZE);

  questionsInTest = picked.map((q, idx) => {
    const blockId = q.id != null ? String(q.id) : `idx-${idx}`;
    const answers = Array.isArray(q.answers) ? q.answers : [];
    const answersShuffled = shuffle(answers).map((a) => ({
      text: a.text,
      isCorrect: !!a.isCorrect,
    }));

    return {
      id: blockId,
      question: q.question ?? "",
      imageUrl: q.imageUrl ?? "",
      why: q.why ?? "",
      answers: answersShuffled,
      selectedIndex: null,
    };
  });
}

function renderProgress() {
  el("progressText").textContent = `Vraag ${currentIndex + 1} van ${questionsInTest.length}`;
  const pct = ((currentIndex + 1) / questionsInTest.length) * 100;
  el("progressFill").style.width = `${pct}%`;

  el("prevBtn").disabled = currentIndex === 0;
  el("nextBtn").disabled = currentIndex === questionsInTest.length - 1;
}

function renderQuestion() {
  const q = questionsInTest[currentIndex];
  renderProgress();

  const area = el("questionArea");
  area.innerHTML = "";

  const title = document.createElement("h2");
  title.className = "qTitle";
  title.textContent = q.question;

  area.appendChild(title);

  if (q.imageUrl) {
    const img = document.createElement("img");
    img.className = "qImage";
    img.src = q.imageUrl;
    img.alt = "image";
    img.loading = "lazy";
    area.appendChild(img);
  }

  const answersWrap = document.createElement("div");
  answersWrap.className = "answers";

  q.answers.forEach((ans, idx) => {
    const row = document.createElement("div");
    row.className = "answer";
    row.setAttribute("role", "button");
    row.tabIndex = 0;

    if (q.selectedIndex === idx) row.classList.add("answer--selected");
    if (isSubmitted) row.classList.add("answer--locked");

    const radio = document.createElement("div");
    radio.className = "answer__radio";

    const text = document.createElement("div");
    text.className = "answer__text";
    text.textContent = ans.text;

    row.appendChild(radio);
    row.appendChild(text);

    const pick = () => {
      if (isSubmitted) return;
      q.selectedIndex = idx;
      updateOverviewButtonStyles();
      renderQuestion();
    };

    row.addEventListener("click", pick);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pick();
      }
    });

    answersWrap.appendChild(row);
  });

  area.appendChild(answersWrap);

  if (isSubmitted) {
    const explain = document.createElement("div");
    explain.className = "explain";

    const correctIdx = q.answers.findIndex((a) => a.isCorrect);
    const selectedIdx = q.selectedIndex;

    const correctText = correctIdx >= 0 ? q.answers[correctIdx].text : "(geen)";
    const selectedText =
      selectedIdx == null ? "(niet gekozen)" : q.answers[selectedIdx]?.text ?? "(?)";

    if (selectedIdx == null) {
      explain.textContent = `Geen antwoord gekozen. Juiste antwoord: ${correctText}. ${q.why}`;
    } else if (q.answers[selectedIdx]?.isCorrect) {
      explain.textContent = `Juist . ${q.why}`;
    } else {
      explain.textContent = `Onjuist . Jouw antwoord: ${selectedText}. Juiste antwoord: ${correctText}. ${q.why}`;
    }

    const answerNodes = area.querySelectorAll(".answer");
    answerNodes.forEach((node, idx) => {
      const isCorrect = !!q.answers[idx]?.isCorrect;
      const isSelected = q.selectedIndex === idx;

      if (isCorrect) node.classList.add("answer--correct");
      if (isSelected && !isCorrect) node.classList.add("answer--wrong");
    });

    area.appendChild(explain);
  }
}

function goTo(index) {
  if (index < 0 || index >= questionsInTest.length) return;
  currentIndex = index;
  renderQuestion();
}

function next() {
  if (currentIndex < questionsInTest.length - 1) {
    currentIndex++;
    renderQuestion();
  }
}

function prev() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function setupKeyboardNav() {
  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea") return;

    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "Escape") closeOverview();
  });
}

function startTimer() {
  const timerValue = el("timerValue");
  timerValue.textContent = formatTime(remainingSeconds);

  timerId = window.setInterval(() => {
    remainingSeconds = Math.max(0, remainingSeconds - 1);

    timerValue.textContent = formatTime(remainingSeconds);

    const timerBox = timerValue.closest(".timer");
    if (timerBox) {
      timerBox.classList.toggle("timer--warn", remainingSeconds <= 5 * 60 && remainingSeconds > 60);
      timerBox.classList.toggle("timer--danger", remainingSeconds <= 60);
    }

    if (remainingSeconds === 0) {
      window.clearInterval(timerId);
      timerId = null;
      if (!isSubmitted) submitTest(true);
    }
  }, 1000);
}

function openOverview() {
  const modal = el("overviewModal");
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  buildOverviewGrid();
}

function closeOverview() {
  const modal = document.getElementById("overviewModal");
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
}

function buildOverviewGrid() {
  const grid = el("overviewGrid");
  grid.innerHTML = "";

  questionsInTest.forEach((q, idx) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "overviewItem";
    b.textContent = String(idx + 1);

    b.addEventListener("click", () => {
      closeOverview();
      goTo(idx);
    });

    grid.appendChild(b);
  });

  updateOverviewButtonStyles();
}

function updateOverviewButtonStyles() {
  const grid = document.getElementById("overviewGrid");
  if (!grid) return;

  const buttons = grid.querySelectorAll(".overviewItem");
  buttons.forEach((btn, idx) => {
    btn.classList.remove(
      "overviewItem--answered",
      "overviewItem--unanswered",
      "overviewItem--wrong",
      "overviewItem--correct"
    );

    const q = questionsInTest[idx];

    if (!isSubmitted) {
      btn.classList.add(q.selectedIndex == null ? "overviewItem--unanswered" : "overviewItem--answered");
      return;
    }

    if (q.selectedIndex == null) {
      btn.classList.add("overviewItem--wrong");
      return;
    }
    const picked = q.answers[q.selectedIndex];
    btn.classList.add(picked && picked.isCorrect ? "overviewItem--correct" : "overviewItem--wrong");
  });

  const lw = document.getElementById("legendWrong");
  const lwt = document.getElementById("legendWrongText");
  const lc = document.getElementById("legendCorrect");
  const lct = document.getElementById("legendCorrectText");
  const show = !!isSubmitted;

  if (lw && lwt && lc && lct) {
    lw.hidden = !show;
    lwt.hidden = !show;
    lc.hidden = !show;
    lct.hidden = !show;
  }
}

function computeScore() {
  let correct = 0;
  let answered = 0;

  questionsInTest.forEach((q) => {
    if (q.selectedIndex != null) answered++;
    const picked = q.selectedIndex == null ? null : q.answers[q.selectedIndex];
    if (picked && picked.isCorrect) correct++;
  });

  return { correct, answered, total: questionsInTest.length };
}

function submitTest(auto = false) {
  if (isSubmitted) return;
  isSubmitted = true;

  if (timerId) {
    window.clearInterval(timerId);
    timerId = null;
  }

  const { correct, answered, total } = computeScore();
  const mistakes = total - correct;

  const resultArea = el("resultArea");
  resultArea.hidden = false;
  resultArea.innerHTML = `
    <div class="resultArea__title">Resultaat</div>
    <div class="resultArea__text">
      ${auto ? "Tijd is op. " : ""}
      Beantwoord: <b>${answered}</b> / ${total} •
      Goed: <b>${correct}</b> •
      Fout: <b>${mistakes}</b>
    </div>
  `;

  const submitBtn = el("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Ingeleverd";

  updateOverviewButtonStyles();
  renderQuestion();
}

function wireUI() {
  el("prevBtn").addEventListener("click", prev);
  el("nextBtn").addEventListener("click", next);

  el("overviewBtn").addEventListener("click", openOverview);
  el("submitBtn").addEventListener("click", () => submitTest(false));

  const modal = el("overviewModal");
  modal.addEventListener("click", (e) => {
    const closeEl = e.target.closest('[data-close="1"]');
    if (closeEl) closeOverview();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadQuestions();
    wireUI();
    setupKeyboardNav();
    startTimer();
    renderQuestion();
  } catch (err) {
    console.error(err);
    const area = document.getElementById("questionArea");
    if (area) area.innerHTML = `<div class="explain">Ошибка: ${err.message}</div>`;
  }
});