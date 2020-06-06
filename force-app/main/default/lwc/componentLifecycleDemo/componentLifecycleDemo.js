import { LightningElement } from 'lwc';

export default class ComponentLifecycleDemo extends LightningElement {
    constructor() {
        super();
        console.log('Constructor called')
    }

    connectedCallback() {
        console.log('Component `connectedCallback` is called')
    }

    renderedCallback() {
        console.log('Component `renderedCallback` is called')
    }

    disconnectedCallback() {
        console.log('Component `disconnectedCallback` is called')
    }
}