import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
// `c/` denotes a custom module we created, therefore we need to give it a custom namespace
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo;
    // Use @api decorator to define public properties in your component. Values of these properties can be supplied by the parent component
    // A component that declares a public property can set only its default value and cannot modify it later on. Public property's value should come from the parent component

    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageRef;
    // ^ must be `pageRef` specifically, can't be `pageReference` or something else

    tileClickHandler() {
        console.log('titleClickHandler invoked!')
        const tileClicked = new CustomEvent('tileclick', { detail: this.meetingRoomInfo, bubbles: true })
        // Instance of `CustomEvent` will take a name for your event (be thoughtful about this) and the payload (as a value to the `detail` key in an object)
        this.dispatchEvent(tileClicked);
        // ^ fires the event from this child component for a parent component to receive

        // pub-sub
        fireEvent(this.pageRef, 'pubsubtileclick', this.meetingRoomInfo);
        // Sub is `selectedMeetingRoom` LWC
    }
}