document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const answers = {
        question1: "Lovesick", 
        question2: "Tbh idk", 
        question3: "pastel blue"        
    };

    for (const [key, correctAnswer] of Object.entries(answers)) {
        const userAnswer = document.getElementById(key).value.trim().toLowerCase();
        if (userAnswer === correctAnswer.toLowerCase()) {
            score++;
        }
    }

    const resultMessage = score === 3 ? "Perfecte score! Je kent me goed!" : `Je score is ${score}/3. Probeer het opnieuw!`;
    document.getElementById('score').innerText = score;
    document.getElementById('score-message').innerText = resultMessage;
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});
