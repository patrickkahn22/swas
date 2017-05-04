// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC1f9aa28b31298ccc6544e06c8ae1e457';
var authToken = "ac70e1878e4e7bf86bd6703d2c65c975";
var client = require('twilio')(accountSid, authToken);

client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+17202047287",
    from: "+4915735983489"
}, function(err, call) {
    process.stdout.write(call.sid);
});
