const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const seen = {}; // объект для хранения количества встреченных имен
  return names.map((name) => {
    if (!seen[name]) {
      // если имя еще не встречалось, сохраняем его
      seen[name] = 1;
      return name;
    } else {
      // иначе добавляем суффикс (k), где k - наименьшее число, при котором имя еще не используется
      let k = seen[name];
      let newName = `${name}(${k})`;
      while (seen[newName]) {
        k++;
        newName = `${name}(${k})`;
      }
      seen[newName] = 1;
      seen[name]++;
      return newName;
    }
  });
}

module.exports = {
  renameFiles,
};
