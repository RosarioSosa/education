function calculateFinalScore() {
    const t1Percentage = 0.1; // 10%
    const t1Score = parseFloat(document.getElementById('t1-score').value);
  
    const t2Percentage = 0.2; // 20% 
    const t2Score = parseFloat(document.getElementById('t2-score').value);
  
    const t3Percentage = 0.3; // 30%
    const t3Score = parseFloat(document.getElementById('t3-score').value);
  
    const finalPercentage = 0.4; // 40%
    const finalScore = parseFloat(document.getElementById('final-score').value);
  
    const totalScore =
      (t1Percentage * t1Score) +
      (t2Percentage * t2Score) +
      (t3Percentage * t3Score) +
      (finalPercentage * finalScore);
  
    document.getElementById('final-score-display').textContent = totalScore.toFixed(2);
  }