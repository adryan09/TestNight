exports.command = function(text){

    this.waitForElementPresent('#InputPassword',3000,false)
        .setValue('#InputPassword',text)


    return this;



}
