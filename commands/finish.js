var request = require('request');
//var Nightwatch = require('/home/addy/NIghtWatch/lib/nightwatch/lib');
exports.command = function(callback) {
    var self = this;

    var jobId = this.sessionId;
    console.log('after', this.currentTest.results.failed, jobId);

    var user = 'ad-gh09';
    var key = '4a6b1d38-1bcd-4215-b559-c248eb4d3fc8';

       var passed =(this.currentTest.results.failed === 0);


   console.log('* updating job status:', jobId, passed);
    var url = 'https://saucelabs.com/rest/v1/' + user + '/jobs/' + jobId;

    request.put({
        url: url,
        auth: {
            username: user,
            password: key
        },
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({passed: passed})
    }, function(res, status, body) {
        console.log('Sauce response:', body);

        if (res || status.statusCode !== 200) {
            console.log('Error updating saucelabs');
        }

        self.end();

        if (typeof callback === 'function') {
            callback.call(self);
        }

    });

    return this;
};