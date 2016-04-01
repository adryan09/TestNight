exports.command = function(text){
    var global = this.globals;
    //this.url('https://new.betbrain.com/signup')
    this.waitForElementVisible('#InputPassword',3000,false)
        .setValue('#InputPassword',text)
        // .pause(500)

    return this;



}
                