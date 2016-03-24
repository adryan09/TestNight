exports.command = function(text){
    //this.url('https://new.betbrain.com/signup')
    this.waitForElementVisible('#InputPassword',1500)
        .setValue('#InputPassword',text)
        .pause(500)

    return this;


}
                