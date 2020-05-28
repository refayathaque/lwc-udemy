import { LightningElement, track, track } from 'lwc';

// Properties decorated with @track, creates a one way data binding between controller and template, template will auto re-render if property value changes here

export default class ConditionalRenderingExample extends LightningElement {
    // LWC bundle name must be camelCase, whereas controller class name must be in PascalCase
    @track displayDiv = false;
    showDivHandler(event) {
        this.displayDiv = event.target.checked;
    }
    // Handler functions create the two way data binding between the template and controller
}