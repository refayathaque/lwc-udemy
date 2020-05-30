import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    meetingRoomsInfo = [
        {roomName:"A-01", roomCapacity:"12"},
        {roomName: "A-02", roomCapacity: "16"},
        {roomName: "A-03", roomCapacity: "34"},
        {roomName: "A-04", roomCapacity: "56"},
        {roomName: "A-05", roomCapacity: "45"},
    ]
}