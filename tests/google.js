
module.exports = {

    'demo test google' : function (browser) {
        browser
            .windowMaximize()
            .url('http://google.com')
            .waitForElementPresent('body', 1000,false)
            .useXpath()
            .waitForElementPresent('//input[@id="lst-ib"]',1000,false,function(res){
                console.log("Res is",);


            })
            .setValue('//input[@id="lst-ib"]', ['nightwatch', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#main', 1000)


    },


    after : function(browser){


        browser.finish()
 

    }





}
