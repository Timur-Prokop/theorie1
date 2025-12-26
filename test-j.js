let questionsInTest = [];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

async function loadQuestions() {
  try {
    const data = window.questions; // ✅ вместо fetch

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Вопросы не найдены. Проверь upload.js и порядок подключения скриптов.");
    }

    const shuffled = shuffle(data);
    questionsInTest = shuffled.slice(0, 21);

    const container = document.getElementById("quiz-container");
    container.innerHTML = "";

    questionsInTest.forEach((q, i) => {
      const div = document.createElement("div");
      div.classList.add("question");
      div.dataset.id = q.id;

      const shuffledAnswers = shuffle(q.answers);

      const answersHtml = shuffledAnswers.map(a => `
        <label class="answer-label">
          <input 
            type="radio" 
            name="q-${q.id}" 
            data-correct="${a.isCorrect}"
          >
          ${a.text}
        </label>
      `).join("");

      div.innerHTML = `
        <h3>${i + 1}. ${q.question}</h3>
        ${q.imageUrl ? `<img src="${q.imageUrl}" alt="vraag afbeelding">` : ""}
        ${answersHtml}
        <div class="explanation"></div>
      `;

      container.appendChild(div);
    });

    container.onchange = (e) => {
      const target = e.target;
      if (target && target.matches('input[type="radio"]')) {
        const name = target.name;
        document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
          input.closest(".answer-label")?.classList.remove("selected");
        });
        target.closest(".answer-label")?.classList.add("selected");
      }
    };
  } catch (err) {
    console.error(err);
    const container = document.getElementById("quiz-container");
    container.innerHTML = `<p style="color:red">Ошибка загрузки вопросов. Проверь upload.js и консоль.</p>`;
  }
}

function checkAnswers() {
  let correctCount = 0;

  questionsInTest.forEach((q) => {
    const block = document.querySelector(`.question[data-id="${q.id}"]`);
    const selected = block.querySelector('input[type="radio"]:checked');
    const explanationEl = block.querySelector(".explanation");

    block.classList.remove("correct", "wrong");
    block.querySelectorAll(".answer-label").forEach((label) => {
      label.classList.remove("answer-correct", "answer-wrong");
    });

    const correctInput = block.querySelector('input[data-correct="true"]');
    const correctLabel = correctInput?.closest(".answer-label");
    const correctText = correctLabel ? correctLabel.textContent.trim() : "";

    if (!selected) {
      block.classList.add("wrong");
      if (explanationEl) {
        explanationEl.textContent = `U hebt niks gekozen. Juiste antrwoord is: ${correctText}. ${q.why}`;
      }
      if (correctLabel) {
        correctLabel.classList.add("answer-correct");
      }
      return;
    }

    const isCorrect = selected.dataset.correct === "true";

    if (isCorrect) {
      block.classList.add("correct");
      selected.closest(".answer-label")?.classList.add("answer-correct");
      correctCount++;

      if (explanationEl) {
        explanationEl.textContent = `Juist ✅. ${q.why}`;
      }
    } else {
      block.classList.add("wrong");
      selected.closest(".answer-label")?.classList.add("answer-wrong");

      if (correctLabel) {
        correctLabel.classList.add("answer-correct");
      }

      if (explanationEl) {
        explanationEl.textContent = `Onjuist ❌. Goede antwoord is: ${correctText}. ${q.why}`;
      }
    }
  });

  document.getElementById("result").textContent =
    `Resultaat: ${correctCount} van ${questionsInTest.length} vragen`;
}

document.getElementById("check-btn").addEventListener("click", checkAnswers);
loadQuestions();
