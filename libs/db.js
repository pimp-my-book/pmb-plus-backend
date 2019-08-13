//This is a lib to connect to the different dbs

const Client = require('serverless-mysql')


const clientLocal = Client({
    config:{
      host: process.env.db_local_host,
      database: process.env.db_local_database,
      user: process.env.db_local_user,
      password: process.env.db_local_password
    }
})

const clientDev = Client({
    config:{
        host: process.env.db_url_dev,
      database: process.env.db_name_dev,
      user: process.env.db_user_dev,
      password: process.env.db_password_dev
    }
})

const clientProd = Client({
    config:{

        host: process.env.db_url_prod,
      database: process.env.db_name_prod,
      user: process.env.db_user_prod,
      password: process.env.db_password_prod
        
    }
})