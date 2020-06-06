import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    meetingRoomsInfo = [
        {roomName: "A-01", roomCapacity:"12"},
        {roomName: "A-02", roomCapacity: "16"},
        {roomName: "A-05", roomCapacity: "34"},
        {roomName: "A-04", roomCapacity: "56"},
        {roomName: "A-10", roomCapacity: "45"}
    ]

    slotsMeetingRoomsInfo = [
        {roomName: "Slot example A-01", roomCapacity: "12"},
        {roomName: "Slot example A-05", roomCapacity: "34"},
        {roomName: "Slot example A-10", roomCapacity: "45"},
        {roomName: "Slot example A-02", roomCapacity: "16"},
        {roomName: "Slot example A-04", roomCapacity: "56"}
    ]

    selectedMeetingRoom;

    onTileSelectHandler(event) {
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
    }

    constructor() {
        super()
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this))
    }
}