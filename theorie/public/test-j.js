async function loadQuestions() {
  const res = await fetch('/api/questions'); // ← НЕ localhost:3000
  const data = await res.json();

  const container = document.getElementById('quiz-container');

  data.forEach((q, i) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${i + 1}. ${q.question}</h3>
      ${q.imageUrl ? `<img src="${q.imageUrl}" style="max-width:300px;"><br>` : ''}
      ${q.answers.map(a => `
        <label>
          <input type="radio" name="q-${q.id}" value="${a.text}">
          ${a.text}
        </label><br>
      `).join('')}
      <hr>
    `;
    container.appendChild(div);
  });
}

loadQuestions();
