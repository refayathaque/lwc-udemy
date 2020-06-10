import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
// `c/` denotes a custom module we created therefore we need to give it a custom namespace
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedMeetingRoom extends LightningElement {
    @track selectedMeetingRoom = {};

    @wire(CurrentPageReference) pageRef;
    // ^ must be `pageRef` specifically, can't be `pageReference` or something else

    connectedCallback() {
        registerListener('pubsubtileclick', this.onMeetingRoomSelectHandler, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    onMeetingRoomSelectHandler(payload) {
        this.selectedMeetingRoom = payload;
    }
}