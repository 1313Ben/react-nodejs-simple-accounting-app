//enforces new when instantiating
const Entry = ( ()=>{
    function Entry(id, date, type, amount, accountName, currency, category, comment){
        this.id = id;
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.accountName = accountName;
        this.currency = currency;
        this.category = category;
        this.comment = comment;
    }
    
    Entry.prototype.getEntryInfo = function(){
        return this.id +" Account Name: "+ this.accountName + " Currency: "+this.currency 
        + this.type +" "+this.category + " Amount: "+this.amount + ". Date: "+ this.date +" Comment: "+this.comment;
    }

    return Entry;
})();

module.exports=Entry