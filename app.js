'use strict';

/**
 * app module
 * @module app
 */

// const fs = require('fs');
const utils = require('./utils.js');
const Q = require('@nmq/q/client');

/**
 * alterFile
   * @param {object} file - file to be altered
   * @desc alterFile function
   */

const alterFile = (file) => {
  utils.readFile(file)
    .then(data => {
      utils.writeFile(file, utils.upper(data));
    })
    .then(emit => {
      let payload = {
        name: 'saved',
        data: `SAVED: event just happened!`,
      };
      Q.publish('files', 'save', JSON.stringify(payload));
    })
    .catch(err => {
      let payload = {
        name: 'error',
        data: `ERROR: event just happened!`,
      };
      Q.publish('files', 'error', JSON.stringify(payload));
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);

