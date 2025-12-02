
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
QUESTION_IDS.push(...getRandomFromRange(1, 123, 6));
QUESTION_IDS.push(...getRandomFromRange(124, 159, 3));
QUESTION_IDS.push(...getRandomFromRange(160, 179, 3));
QUESTION_IDS.push(...getRandomFromRange(180, 210, 3));
QUESTION_IDS.push(...getRandomFromRange(211, 250, 3));
QUESTION_IDS.push(...getRandomFromRange(251, 280, 3));
QUESTION_IDS.push(...getRandomFromRange(281, 310, 2));
QUESTION_IDS.push(...getRandomFromRange(311, 320, 2));
QUESTION_IDS.push(...getRandomFromRange(321, 330, 2));
QUESTION_IDS.push(...getRandomFromRange(331, 357, 2));
QUESTION_IDS.push(...getRandomFromRange(358, 382, 2));
QUESTION_IDS.push(...getRandomFromRange(383, 397, 2));
QUESTION_IDS.push(...getRandomFromRange(398, 422, 2));
QUESTION_IDS.push(...getRandomFromRange(423, 447, 2));
QUESTION_IDS.push(...getRandomFromRange(448, 460, 2));
QUESTION_IDS.push(...getRandomFromRange(461, 480, 2));
QUESTION_IDS.push(...getRandomFromRange(481, 505, 2));
QUESTION_IDS.push(...getRandomFromRange(506, 529, 2));
QUESTION_IDS.push(...getRandomFromRange(530, 548, 2));
QUESTION_IDS.push(...getRandomFromRange(549, 568, 2));
QUESTION_IDS.push(...getRandomFromRange(569, 595, 2));

// 1321321232




let questionsInTest = [];

async function loadQuestions() {
  const res = await fetch('/api/questions');
  const data = await res.json();

  questionsInTest = data
    .filter(q => QUESTION_IDS.includes(q.id))
    .slice(0, 50);

  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  questionsInTest.forEach((q, i) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.dataset.id = q.id;

    // 🔹 Перемешиваем ответы здесь
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
    const selected = document.querySelector(`input[name="q-${q.id}"]:checked`);
    const block = document.querySelector(`.question[data-id="${q.id}"]`);

    block.classList.remove('correct', 'wrong');

    if (!selected) {
      block.classList.add('wrong');
      return;
    }

    if (selected.dataset.correct === 'true') {
      block.classList.add('correct');
      correctCount++;
    } else {
      block.classList.add('wrong');
    }
  });

  document.getElementById('result').textContent =
    `Resultaat: ${correctCount} van ${questionsInTest.length} vragen`;
}

document.getElementById('check-btn').addEventListener('click', checkAnswers);

loadQuestions();
