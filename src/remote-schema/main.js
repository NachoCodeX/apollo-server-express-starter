const { githuntLink, remoteServerLink } = require('./links');
const { main } = require('./server');

const { LOCAL_PORT } = require('./config');

main({
  // link: githuntLink,
  // link: remoteServerLink,
  links: [githuntLink, remoteServerLink],
  port: LOCAL_PORT
}).then(server => {
  console.log('==');
});
