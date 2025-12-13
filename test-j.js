
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
  const res = await fetch('/api/questions'); // или './questions.json'
  const data = await res.json();

  // перемешиваем все вопросы
  const shuffled = shuffle(data);

  // берём первые 21
  questionsInTest = shuffled.slice(0, 21);

  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  questionsInTest.forEach((q, i) => {
    const div = document.createElement('div');
    div.classList.add('question');
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
    `).join('');

    div.innerHTML = `
      <h3>${i + 1}. ${q.question}</h3>
      ${q.imageUrl ? `<img src="${q.imageUrl}" alt="vraag afbeelding">` : ''}
      ${answersHtml}
      <div class="explanation"></div>
    `;

    container.appendChild(div);
  });

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
