exports.command = function (){
    var val = this.globals;
    this.url('https://www.guerrillamail.com/inbox?mail_id=1')

        .maximizeWindow()
        .waitForElementVisible('#use-alias',2000,false,function(res){

            console.log("Rezzz ",this.currentTest)
        })
        //.expect.element('#use-aliasfff').to.be.present;
        //.verify.elementPresent("#use-aliasfff",false);
        this.click('#use-alias')
        .pause(3000)
        .getText('#email-widget',function(res){
            console.log("Res is",res.value);
            this.globals.globalVar = res.value;

            var glob = this.globals.globalVar;

            console.log("Glo 2",glob);

        })
                                    
          
            
        .url('https://new.betbrain.com/signup')
        .waitForElementPresent('#InputEmail',10000,false,function(){

            console.log("Val", val.globalVar);
            this.setValue('#InputEmail',val.globalVar)
                .pause(2000)

        });

    return this;

};


