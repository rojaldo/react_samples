export class Card {
    question = '';
    correctAnswer = '';
    answers = [];
    responded = false;
    rightAnswered = false;

    constructor(jsonCard){
        this.question = jsonCard.question;
        this.correctAnswer = jsonCard.correct_answer;
        this.answers = [...jsonCard.incorrect_answers, jsonCard.correct_answer]
    }
}