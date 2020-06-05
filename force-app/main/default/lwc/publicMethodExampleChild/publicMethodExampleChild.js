import { LightningElement, api } from 'lwc';

export default class PublicMethodExampleChild extends LightningElement {
    value = 'Red';

    // options is a private non-reactive property, therefore no @track decorator
    options = [
        { label: 'Red Marker', value: 'Red' },
        { label: 'Blue Marker', value: 'Blue' },
        { label: 'Green Marker', value: 'Green' },
        { label: 'Yellow Marker', value: 'Yellow' }
    ];

    @api selectCheckbox(checkboxValue) {
        const selectedCheckbox = this.options.find(checkbox => {
            return checkboxValue === checkbox.value;
        })

        if(selectedCheckbox) {
            this.value = selectedCheckbox.value;
            return "Succesfully checked";
        } else {
            return "No checkbox found";
        }
    }
}