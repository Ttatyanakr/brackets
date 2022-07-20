module.exports = function check(str, bracketsConfig) {

  // ищем совпадение первого символа в сроке с открывающей кавычкой
  for (let i = 0; i < bracketsConfig.length; i++) {

    // если нашли совпадение первого символа
    if (str[0] === bracketsConfig[i][0]) {

      // ищем закрывающую кавычку
      for (let j = 1; j < str.length; j++) {
        // если нашли закрывающую пару
        if (bracketsConfig[i][1] === str[j] && j % 2 !== 0) {
          str = str.substring(1, j) + str.substring(j + 1);
          if (str.length === 0) return true;
          return check(str, bracketsConfig);

        // если не нашли закрывающую пару
        } else if (j + 1 >= str.length) {
          return false;
        }

      }

    // если не нашли совпадение первого символа
    } else if (i + 1 >= bracketsConfig.length) {
      return false;
    }
  }
}