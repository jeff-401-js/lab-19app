'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( (!file) || file.match(/bad/i)){
    cb('Invalid file');
  }else{
    cb(undefined, new Buffer('success'));
  }
};

exports.writeFile = (file, buffer, cb) => {
  if( (!file) || file.match(/bad/i)){
    cb('Invalid file');
  }
  else if( ! Buffer.isBuffer(buffer)){
    cb('Invalid Buffer', undefined);
  }
  else{
    cb(undefined, undefined);
  }
};