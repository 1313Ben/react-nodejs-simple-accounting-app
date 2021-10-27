const Account =( ()=>{
    function Account(accountId, accountName,currentBalance, currency, createdDate){
        this.accountId = accountId;
        this.accountName = accountName;
        this.currentBalance = currentBalance;
        this.currency = currency;
        this.createdDate = createdDate;
    }

    Account.prototype.getAccountInfo = function(){
        return this.accountName + " "+ this.currentBalance + " Currency: "+this.currency + ". CreatedDate: "+this.createdDate;
    }
    return Account;
})();

module.exports=Account;