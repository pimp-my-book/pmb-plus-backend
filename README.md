

# PMB Plus Backend

This is the backend for PMB Plus

It is powered by [`Apollo-Server-Lambda`](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda) and uses the [Serverless Framework](https://serverless.com/) to deploy it to AWS.



## Prerequistes 

* [An AWS Account](https://aws.amazon.com/)
* [A configured AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
* [Serverless Framework installed on your machine](https://serverless.com/framework/docs/providers/aws/guide/installation/)
* [NodeJS](nodejs.org) 

Note this project uses [Yarn](https://yarnpkg.com). 

## How to get started

First clone the repo:

```
$ git clone https://github.com/pimp-my-book/pmb-plus-backend 
```

Move into the project folder:

```
$ cd project-name
```

Then Install all its dependancies:

```
$ yarn install
```

Then you should be able to invoke the Lambda locally:

```
$ yarn offline
```

To deploy to AWS run the following command:

```
$ yarn deploy
```

This should be a good start to be able to move on and do whatever you gotta do meet business requirements.  


