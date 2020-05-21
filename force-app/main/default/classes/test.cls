public class AccountHandler {
    
    public static Account insertNewAccount(String accountName)
    {
        // This causes an exception when the required Name field is not provided.
        try {    
            Account acct = new Account(Name=accountName);
            // Insert the account by using DML
            insert acct;
            // Display this Account in the debug log
            System.debug(acct);
            return acct;
        } catch (DmlException e) {
            System.debug('A DML exception has occurred: ' + e.getMessage());
            return null;
        }
    }
}