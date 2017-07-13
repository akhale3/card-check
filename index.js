'use strict';

const validator = require('card-validator');
const Table = require('cli-table');

let validate = (number, type) => {
  let numberValidation =  validator.number(number);
  type = type || 'pretty';

  switch (type) {
    case 'pretty':
      let table = new Table();
      table.push(
        ['Number', 'Type', 'Potentially Valid', 'Valid'],
        [
          number,
          numberValidation.card && numberValidation.card.niceType || 'N/A',
          numberValidation.isPotentiallyValid,
          numberValidation.isValid
        ]
      );

      console.log(table.toString());

      break;
    case 'json':
      return numberValidation;

      break;
    default:
        break;
  }
};

module.exports = validate;
