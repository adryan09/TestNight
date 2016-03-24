function update_saucelabs(failed, tags, client, https, callback) { var data = JSON.stringify({ "passed" : (failed == 0) ? true : false, "tags" : tags });
    var requestPath = '/rest/v1/'+ client.options.username +'/jobs/' + client.sessionId;
    try { console.log('Updaing SauceLabs..', requestPath); var req = https.request({ hostname: 'saucelabs.com', path: requestPath, method: 'PUT', auth : client.options.username + ':' + client.globals.access_key, headers : { 'Content-Type': 'application/json', 'Content-Length' : data.length } },
        function(res) { res.setEncoding('utf8');
            console.log('Response: ', res.statusCode, JSON.stringify(res.headers)); res.on('data', function (chunk) { console.log('BODY: ' + chunk); }); res.on('end', function () { console.info('Finished updating SauceLabs...'); callback(); }); });
        req.on('error', function(e) { console.log('Problem with request: ' + e.message); }); req.write(data); req.end(); } catch (err) { console.log('Error', err); callback(); } }
module.exports.update_saucelabs = update_saucelabs;
