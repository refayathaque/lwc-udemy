import { LightningElement } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";

export default class AccountManagerLDS extends LightningElement {
     accountName;
     accountPhone;
     accountWebsite;

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
        }).catch(error => {
            console.error('Error in creating an account: ', error.body.message)
        });
    }
}