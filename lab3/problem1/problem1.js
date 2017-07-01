/**
 * Created by Sulav on 6/28/17.
 */

const dns = require('dns');

dns.resolve4('www.mum.edu', (err, addresses) => {
    if (err) throw err;

    console.log(`IP Address: ${addresses}`);
});