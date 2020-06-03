import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo;
    // Use @api decorator to define public properties in your component. Values of these properties can be supplied by the parent component
    // A component that declares a public property can set only its default value and cannot modify it later on. Public property's value should come from the parent component

    @api showRoomInfo = false;
}