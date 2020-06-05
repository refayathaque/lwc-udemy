import { LightningElement } from 'lwc';

export default class PublicMethodExampleParent extends LightningElement {
    value;

    checkboxSelectHandler() {
        const childComponent = this.template.querySelector('c-public-method-example-child')
        // querySelector() uses CSS selectors and returns the first element within the document that matches the specified selector
        const returnedMessage = childComponent.selectCheckbox(this.value);
        console.log('Returned Message: ', returnedMessage);
    }

    onInputChangeHandler(event) {
        this.value = event.target.value;
    }
}