// какие вопросы использовать
const QUESTION_IDS = [3,5,8,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60];
let questionsInTest = [];

async function loadQuestions() {
  const res = await fetch('/api/questions');
  const data = await res.json();

  questionsInTest = data
    .filter(q => QUESTION_IDS.includes(q.id))
    .slice(0, 20);

  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  questionsInTest.forEach((q, i) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.dataset.id = q.id;

    const answersHtml = q.answers.map(a => `
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
