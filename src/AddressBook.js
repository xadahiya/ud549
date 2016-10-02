function AddressBook(){
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(){
    var self = this;

    setTimeout(function(cb){
        self.initialComplete = true;
        if (cb){
            cb();
        }
    }, 2);
}
AddressBook.prototype.addContact = function(contact){
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index){
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index){
    this.contacts.splice(index,1);
}