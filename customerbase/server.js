const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema1.js');

const app = express();

app.use('/graphql', expressGraphQL({
  schema:schema1,
  graphiql:true
}));

app.listen(4000, () => {
  console.log('server is running on port 4000');
});
