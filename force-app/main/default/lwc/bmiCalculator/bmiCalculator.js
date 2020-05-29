import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator';
    
    // code below for pre spring '20 release when you needed @track to make primitive private properties reactive, now you don't
    // weight; // primitive private non-reactive (any change to property NOT reflected in template) property
    // height;
    //  @track bmi; // primitive private reactive (any change to property reflected in template) property
    // Private properties can be made reactive by using @track decorator. These properties develop a data binding and updates the template upon value change

    @track bmiData = {
        weight: 0,
        height: 0,
        result: 0
    }

    // bmi;

    onWeightChange(event) {
        this.bmiData.weight = parseFloat(event.target.value);
    } 

    onHeightChange(event) {
        this.bmiData.height = parseFloat(event.target.value);
    }

    calculateBMI() {
        try {
            this.bmiData.result = this.bmiData.weight / (this.bmiData.height * this.bmiData.height)
        } catch (error) {
            this.bmiData.result = undefined;
        }
    }

    // Getters can be used to compute the value of a property
    get bmiValue() {
        if(this.bmiData.result === undefined) {
            return "";
        }
        return `Your BMI is: ${this.bmiData.result}`
    }
}