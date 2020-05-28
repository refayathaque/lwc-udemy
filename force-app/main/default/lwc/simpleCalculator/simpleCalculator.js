import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;

    firstNumber;
    secondNumber;

    numberChangeHandler(event) {
        const { value, name: inputBoxName } = event.target;
        // ^ ES6 destructuring - https://medium.com/javascript-in-plain-english/what-is-so-special-about-es6-destructuring-6be45fbec52c
        if(inputBoxName === 'firstNumber') {
            this.firstNumber = value;
        } else if(inputBoxName === 'secondNumber') {
            this.secondNumber = value;
        }
    }

     additionHandler() {
         const firstN = parseInt(this.firstNumber);
         const secondN = parseInt(this.secondNumber);
        //  ^ bc html textbox always returns a string value
        this.currentResult = `Result of ${firstN} + ${secondN} is ${firstN + secondN}`
        // Template literals are enclosed by the back-tick (``) and can contain placeholders indicated by the dollar sign and curly braces
     }


     subtractionHandler() {
         const firstN = parseInt(this.firstNumber);
         const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} - ${secondN} is ${firstN - secondN}`
     }


     multiplicationHandler() {
         const firstN = parseInt(this.firstNumber);
         const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} * ${secondN} is ${firstN * secondN}`
     }


     divisionHandler() {
         const firstN = parseInt(this.firstNumber);
         const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} / ${secondN} is ${firstN / secondN}`
     }
}