const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function sortByHeight(arr) {
    // Получаем массив позиций элементов со значением -1
    const minusOnes = arr.reduce((acc, val, index) => {
      if (val === -1) {
        acc.push(index);
      }
      return acc;
    }, []);

    // Сортируем массив без элементов со значением -1
    const sortedArr = arr.filter((val) => val !== -1).sort((a, b) => a - b);

    // Вставляем элементы со значением -1 на их исходные позиции
    minusOnes.forEach((pos) => {
      sortedArr.splice(pos, 0, -1);
    });

    return sortedArr;
  }
}

module.exports = {
  sortByHeight,
};
