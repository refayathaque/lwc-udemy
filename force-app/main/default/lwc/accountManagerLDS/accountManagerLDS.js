import { LightningElement, wire } from 'lwc';
import { createRecord, getRecord } from "lightning/uiRecordApi";

const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website']
export default class AccountManagerLDS extends LightningElement {
    accountName;
    accountPhone;
    accountWebsite;
    recordId;

    // '$recordId', instead of this.recordId, makes the property reactive, which we in case we create a new record at any point
    // $ means that the value is passed dynamically, when the value changes, the wire service provisions data and the component rerenders
    // wired properties are reactive like tracked properties, and rerenders the template when the property value changes
    @wire(getRecord, { recordId: '$recordId', fields: fieldArray })
    accountRecord;

    accountNameChangeHandler({ target }) {
        this.accountName = target.value;
    }

    accountPhoneChangeHandler({ target }) {
        this.accountPhone = target.value;
    }

    accountWebsiteChangeHandler({ target }) {
        this.accountWebsite = target.value;
    }

    createAccount() {
        const fields = { 'Name': this.accountName, 'Phone': this.accountPhone, 'Website': this.accountWebsite };
        const recordInput = { apiName: 'Account', fields };
        createRecord(recordInput).then(response => {
            console.log('Account has been created: ', response.id);
            this.recordId = response.id
        }).catch(error => {
            console.error('Error in creating an account: ', error.body.message)
        });
    }

    get retrievedAccountName() {
        if(this.accountRecord.data) {
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }

    get retrievedAccountPhone() {
        if(this.accountRecord.data) {
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }

    get retrievedAccountWebsite() {
        if(this.accountRecord.data) {
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }
}