module.exports  = {
    'Test Assert' : function (client){

        client
            .url('https://new.betbrain.com/signup')
            .useXpath()
            .expect.element('.//button[@class="ButtonForm"]').to.be.present;
            client.end()







    }





}