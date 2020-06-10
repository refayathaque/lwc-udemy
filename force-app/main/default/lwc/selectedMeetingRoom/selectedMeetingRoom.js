import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
// `c/` denotes a custom module we created, therefore we need to give it a custom namespace
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedMeetingRoom extends LightningElement {
    selectedMeetingRoom = { roomName: "test", roomCapacity: "56754" };
    // Why don't we need `@track` decorator above since it's a reactive non-primitive data type (object)? Because LWC framework observes changes that assign a new value to the `selectedMeetingRoom` field. If we assigned a new value to just the `roomName` or the `roomCapacity` property of the `selectedMeetingRoom` object there would be no re-render without `@track`, but we are not doing that here. As the subscriber to the listener for event 'pubsubtileclick', we are assigning a new value to the entire `selectedMeetingRoom` object, not just a single property within it. Therefore, even without @track, this non-primitive data type is reactive.
    // https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_lwc_track.htm?edition=&impact=

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