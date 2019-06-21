'use strict';

const utils = require('../utils.js');


jest.mock('fs');

describe('uppercase', () => {
  it('should return a string uppercased', () => {
    let str = 'some test string';
    str = utils.upper(str);
    expect(str).toEqual('SOME TEST STRING');
  });
});

// describe('readFile', () => {
//   it('when given a bad file, returns an error', done => {
//     let files = ['bad.txt'];
//     return utils.readFile(files)
//       .then(err => {
//         expect(err).toBeDefined();
//         done();
//       });
//   });

//   it('when given a good file, returns file data', done => {
//     let files = ['test.txt'];
//     return utils.readFile(files)
//       .then(data => {
//         expect(data).toBeDefined();
//         done();
//       });
//   });
// });

// describe('writeFile', () => {
//   it('when given a bad file, throws error', done => {
//     let files = ['bad.txt'];
//     return utils.writeFile(files)
//       .then(err => {
//         expect(err).toBeDefined();
//         done();
//       });
//   });

//   it('when given a good file, writes', done => {
//     let files = ['test.txt'];
//     return utils.writeFile(files)
//       .then(data => {
//         expect(data).toBeDefined();
//         done();
//       });
//   });
// });