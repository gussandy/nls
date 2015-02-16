
var errorState = new ReactiveVar;


Template.lottoForm.created = function() {
    errorState.set('errors', []);
};


Template.lottoForm.events({
    'blur input': function(e, t) {
        e.preventDefault();
        validate($(this));
    }
});


Template.lottoForm.helpers({
    errorClass: function (key) {
        return errorState.get('errors')[key] ? 'has-error' : '';
    }
});


Template.errorMsg.helpers({
    errorMessages: function(key) {
        return errorState.get('errors')[key];
    }
});

function throwErr(message) {
   return errorState.set('errors', message);
}


var validate = function (formField) {
    $("input").each(function(index, element){
        var fieldValue = $(element).val();
        if(fieldValue){
            if(isNaN(fieldValue) == true) {
                throwErr('Not a valid Number');
            }
        }
    });
}