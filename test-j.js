let questionsInTest = [];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function loadQuestions() {
  try {
    const data = window.questions;

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error(
        "Вопросы не найдены. Проверь, что в upload.js есть window.questions = [...] и что upload.js подключён перед test-j.js"
      );
    }

    const shuffled = shuffle(data);
    questionsInTest = shuffled.slice(0, 21);

    const container = document.getElementById("quiz-container");
    if (!container) throw new Error('Не найден элемент #quiz-container в test.html');

    container.innerHTML = "";

    questionsInTest.forEach((q, i) => {
      const div = document.createElement("div");
      div.classList.add("question");

      // Всегда уникальный id для блока
      const blockId = q.id != null ? String(q.id) : `idx-${i}`;
      div.dataset.id = blockId;

      // Всегда уникальная группа радиокнопок
      const groupName = `q-${blockId}`;

      const shuffledAnswers = shuffle(q.answers || []);

      const answersHtml = shuffledAnswers
        .map((a) => `
          <label class="answer-label">
            <input
              type="radio"
              name="${groupName}"
              data-correct="${a.isCorrect ? "true" : "false"}"
            >
            ${a.text}
          </label>
        `)
        .join("");

      div.innerHTML = `
        <h3>${i + 1}. ${q.question}</h3>
        ${q.imageUrl ? `<img src="${q.imageUrl}" alt="image">` : ""}
        ${answersHtml}
        <div class="explanation"></div>
      `;

      container.appendChild(div);
    });

    // Обработчик подсветки — без once:true (иначе работает только 1 раз)
    if (!container.dataset.listenerAdded) {
      container.addEventListener("change", (e) => {
        const target = e.target;
        if (target && target.matches('input[type="radio"]')) {
          const name = target.name;

          // снимаем selected только в рамках этого вопроса
          container.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
            input.closest(".answer-label")?.classList.remove("selected");
          });

          // ставим selected на выбранный вариант
          target.closest(".answer-label")?.classList.add("selected");
        }
      });

      container.dataset.listenerAdded = "1";
    }
  } catch (err) {
    console.error(err);
    const container = document.getElementById("quiz-container");
    if (container) {
      container.innerHTML = `<p style="color:red">Ошибка: ${err.message}</p>`;
    }
  }
}

function checkAnswers() {
  let correctCount = 0;

  questionsInTest.forEach((q, i) => {
    const blockId = q.id != null ? String(q.id) : `idx-${i}`;
    const block = document.querySelector(`.question[data-id="${blockId}"]`);
    if (!block) return;

    const selected = block.querySelector('input[type="radio"]:checked');
    const explanationEl = block.querySelector(".explanation");

    // сброс классов
    block.classList.remove("correct", "wrong");
    block.querySelectorAll(".answer-label").forEach((label) => {
      label.classList.remove("answer-correct", "answer-wrong");
    });

    // правильный ответ
    const correctInput = block.querySelector('input[data-correct="true"]');
    const correctLabel = correctInput?.closest(".answer-label");
    const correctText = correctLabel ? correctLabel.textContent.trim() : "";

    if (!selected) {
      block.classList.add("wrong");
      if (correctLabel) correctLabel.classList.add("answer-correct");
      if (explanationEl) {
        explanationEl.textContent = `U hebt niks gekozen. Juiste antwoord is: ${correctText}. ${q.why ?? ""}`;
      }
      return;
    }

    const isCorrect = selected.dataset.correct === "true";

    if (isCorrect) {
      block.classList.add("correct");
      selected.closest(".answer-label")?.classList.add("answer-correct");
      correctCount++;
      if (explanationEl) explanationEl.textContent = `Juist ✅. ${q.why ?? ""}`;
    } else {
      block.classList.add("wrong");
      selected.closest(".answer-label")?.classList.add("answer-wrong");
      if (correctLabel) correctLabel.classList.add("answer-correct");
      if (explanationEl) {
        explanationEl.textContent = `Onjuist ❌. Goede antwoord is: ${correctText}. ${q.why ?? ""}`;
      }
    }
  });

  const resultEl = document.getElementById("result");
  if (resultEl) {
    resultEl.textContent = `Resultaat: ${correctCount} van ${questionsInTest.length} vragen`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("check-btn");
  if (btn) btn.addEventListener("click", checkAnswers);

  console.log("questions loaded:", window.questions?.length);
  loadQuestions();
});
