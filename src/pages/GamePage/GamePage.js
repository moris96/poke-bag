import { useState } from "react";

export default function GamePage() {
    const questions = [
        {
            questionText: "What is super effective against grass?",
            answerOptions: [
                { answerText: "fire", isCorrect: true },
                { answerText: "water", isCorrect: false },
                { answerText: "dragon", isCorrect: false },
                { answerText: "normal", isCorrect: false },
            ],
        },
        {
            questionText: "What is super effective against fire?",
            answerOptions: [
                { answerText: "steel", isCorrect: false },
                { answerText: "fairy", isCorrect: false },
                { answerText: "water", isCorrect: true },
                { answerText: "grass", isCorrect: false },
            ],
        },
        {
            questionText: "What is super effective against water?",
            answerOptions: [
                { answerText: "fairy", isCorrect: false },
                { answerText: "grass", isCorrect: true },
                { answerText: "steel", isCorrect: false },
                { answerText: "flying", isCorrect: false },
            ],
        },
        {
            questionText: "Who is the original champion of Kanto?",
            answerOptions: [
                { answerText: "Blue", isCorrect: true },
                { answerText: "Red", isCorrect: false },
                { answerText: "Steven", isCorrect: false },
                { answerText: "Gold", isCorrect: false },
            ],
        },
        {
            questionText: "Who is the champion of Sinnoh?",
            answerOptions: [
                { answerText: "Lance", isCorrect: false },
                { answerText: "Red", isCorrect: false },
                { answerText: "Leon", isCorrect: false },
                { answerText: "Cynthia", isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(0)
    const [score, setScore] = useState(0)

    const handleAnswerOptionClick = (isCorrect) => {
        if(isCorrect){
            setScore(score+1)
        }
        const nextQuestion = currentQuestion + 1
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        } else{
            setShowScore(true)
        }
    };
        
    return(
        <div className='game'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    )
};