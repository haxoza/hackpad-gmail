var HackpadGmail = (function() {

    function HackpadGmail(key, secret) {
        this.key = key;
        this.secret = secret;
        // oauth here ...
    }

    HackpadGmail.prototype.create = function() {
        var data = {
            asUser: ''
        };
        var url = 'https://hackpad.com/api/1.0/pad/create';
        $.ajax({
            type: "POST",
            url: url,
            data: 'Hackpad from Gmail',
            success: function(response) {
                console.log(response);
            }
        });
    };

    return HackpadGmail;
})();

$(document).ready(function(){
    var hackpadGmail = new HackpadGmail(API_KEY, API_SECRET);
    hackpadGmail.create();
});
