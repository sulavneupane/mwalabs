/**
 * Created by Sulav on 6/28/17.
 */

let fs = require('fs');
let zlib = require('zlib');
let gunzip = zlib.createGunzip();

let readable = fs.createReadStream(__dirname + '/problem4.gz');
let decompressed = fs.createWriteStream(__dirname + '/problem4.txt');

readable.pipe(gunzip).pipe(decompressed);