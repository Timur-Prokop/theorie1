
function shuffle(array) {
  const arr = [...array]; // делаем копию, чтобы не портить оригинал
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// какие вопросы использовать
function getRandomFromRange(min, max, count) {
  const set = new Set();
  while (set.size < count) {
    set.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return [...set];
}
let QUESTION_IDS = [];
QUESTION_IDS.push(...getRandomFromRange(1, 123, 1));
QUESTION_IDS.push(...getRandomFromRange(124, 159, 1));
QUESTION_IDS.push(...getRandomFromRange(160, 179, 1));
QUESTION_IDS.push(...getRandomFromRange(180, 210, 1));
QUESTION_IDS.push(...getRandomFromRange(211, 250, 1));
QUESTION_IDS.push(...getRandomFromRange(251, 280, 1));
QUESTION_IDS.push(...getRandomFromRange(281, 310, 1));
QUESTION_IDS.push(...getRandomFromRange(311, 320, 1));
QUESTION_IDS.push(...getRandomFromRange(321, 330, 1));
QUESTION_IDS.push(...getRandomFromRange(331, 357, 1));
QUESTION_IDS.push(...getRandomFromRange(358, 382, 1));
QUESTION_IDS.push(...getRandomFromRange(383, 397, 1));
QUESTION_IDS.push(...getRandomFromRange(398, 422, 1));
QUESTION_IDS.push(...getRandomFromRange(423, 447, 1));
QUESTION_IDS.push(...getRandomFromRange(448, 460, 1));
QUESTION_IDS.push(...getRandomFromRange(461, 480, 1));
QUESTION_IDS.push(...getRandomFromRange(481, 505, 1));
QUESTION_IDS.push(...getRandomFromRange(506, 529, 1));
QUESTION_IDS.push(...getRandomFromRange(530, 548, 1));
QUESTION_IDS.push(...getRandomFromRange(549, 568, 1));
QUESTION_IDS.push(...getRandomFromRange(569, 595, 1));


async function loadQuestions() {
  const res = await fetch('/api/questions');
  const data = await res.json();

  questionsInTest = data
    .filter(q => QUESTION_IDS.includes(q.id))
    .slice(0, 21);

  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  questionsInTest.forEach((q, i) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.dataset.id = q.id;

    //  Перемешиваем ответы здесь
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
    `).join('');

    div.innerHTML = `
      <h3>${i + 1}. ${q.question}</h3>
      ${q.imageUrl ? `<img src="${q.imageUrl}" alt="vraag afbeelding">` : ''}
      ${answersHtml}
      <div class="explanation"></div>
    `;

    container.appendChild(div);
  });

  // подсветка выбранного варианта (класс selected)
  container.addEventListener('change', (e) => {
    if (e.target.matches('input[type="radio"]')) {
      const name = e.target.name;
      const allForThisQuestion = document.querySelectorAll(`input[name="${name}"]`);
      allForThisQuestion.forEach(input => {
        input.closest('.answer-label').classList.remove('selected');
      });
      e.target.closest('.answer-label').classList.add('selected');
    }
  });
}

function checkAnswers() {
  let correctCount = 0;

  questionsInTest.forEach(q => {
    const block = document.querySelector(`.question[data-id="${q.id}"]`);
    const selected = block.querySelector('input[type="radio"]:checked');
    const explanationEl = block.querySelector('.explanation');

    // убираем старые классы
    block.classList.remove('correct', 'wrong');
    block.querySelectorAll('.answer-label').forEach(label => {
      label.classList.remove('answer-correct', 'answer-wrong');
    });

    // находим правильный вариант в DOM
    const correctInput = block.querySelector('input[data-correct="true"]');
    const correctLabel = correctInput?.closest('.answer-label');
    const correctText = correctLabel ? correctLabel.textContent.trim() : '';

    if (!selected) {
      // ничего не выбрано — считаем как неправильный
      block.classList.add('wrong');
      if (explanationEl) {
        explanationEl.textContent = `U hebt niks gekozen. Juiste antrwoord is: ${correctText}. ${q.why}`;
      }
      if (correctLabel) {
        correctLabel.classList.add('answer-correct');
      }
      return;
    }

    const isCorrect = selected.dataset.correct === 'true';

    if (isCorrect) {
      block.classList.add('correct');
      selected.closest('.answer-label').classList.add('answer-correct');

      correctCount++;

      if (explanationEl) {
        explanationEl.textContent = `Juist ✅. ${q.why}`;
      }
    } else {
      block.classList.add('wrong');

      // подсвечиваем выбранный как неправильный
      selected.closest('.answer-label').classList.add('answer-wrong');

      // подсвечиваем правильный зелёным
      if (correctLabel) {
        correctLabel.classList.add('answer-correct');
      }

      if (explanationEl) {
        explanationEl.textContent = `Onjuist ❌. Goede antwoord is: ${correctText}. ${q.why}`;
      }
    }
  });

  document.getElementById('result').textContent =
    `Resultaat: ${correctCount} van ${questionsInTest.length} vragen`;
}


document.getElementById('check-btn').addEventListener('click', checkAnswers);

loadQuestions();
