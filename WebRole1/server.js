var connect = require('connect');
var browserchannel = require('browserchannel');
var share = require('share').server;

// Setting up server...
var server = connect(
    connect.logger(),
    connect.static(__dirname + '/public')
);
// ..and options
var options = { db: { type: 'none'},
browserChannel: {cors:"*"}  };

// Attaching ShareJS to the created Connect server
share.attach(server, options);

// Which port?
server.listen(process.env.PORT || 8000);
console.log('Flinger Server running.');