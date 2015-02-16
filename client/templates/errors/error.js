/*



Template.errorMsg.helpers({
    errorMessages: function(){
        return Errors.collection.find();
    }
});

Template.fieldError.rendered = function() {
    var error = this.data;
    Meteor.defer(function() {
        Errors.collection.update(error._id, {$set: {seen: true}});
    });
};

*/



