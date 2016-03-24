var https = require('https');
module.exports =  {

   'ExclusiveBet Test ' : function(browser){

    browser
        .emailField()
        .password('adasdas')
        .end()
   },

    after : function (browser){
        browser.end();


    },
    tearDown : function(callback){


        if(this.client.globals.selenium_server == 'saucelabs')
        {
            require('/home/addy/NIghtWatch/lib/nightwatch/lib/saucelabs.js').update_saucelabs(this.results.failed, ["my-tag1", "my-tag2"], this.client, https, callback);

        }else
        {
            callback();
        }



    }






    



}
