const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // Разбиваем строку email на две части по символу @
  const parts = email.split('@');
  // Возвращаем последний элемент из полученного массива parts
  return parts[parts.length - 1];
}

module.exports = {
  getEmailDomain,
};
