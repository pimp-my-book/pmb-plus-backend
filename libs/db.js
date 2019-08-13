//This is a lib to connect to the different dbs

const Client = require('serverless-mysql')


const clientLocal = Client({
    config:{

    }
})

const clientDev = Client({
    config:{
        
    }
})

const clientProd = Client({
    config:{
        
    }
})