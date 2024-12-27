// 1. Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа
function factorial(count: number): number | string {
  if (count < 0) {
    return 'Значение не может быть отрицательным';
  }
  let result = 1;
  for (let i = 2; i <= count; i++) {
    result *= i;
  }
  return result;
}

//2. Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке
const longestLine = (str: string): string => {
  const text: string[] = str.split(' '); // разбиваем строку на слова
  const longestItem: string = text.reduce((longest, current) => {
    return current.length > longest.length ? current : longest; // используем метод reduce для нахождения самого длинного слова(1 значение будет самым длинным словом,
  }, ''); // 2 значение - текущее слово)
  return longestItem;
};

//3. Написать функцию, которая на вход принимает массив, состоящий из массивов целых чисел
// и возвращает массив, состоящий из наибольшего числа каждого представленного подмассива.
const arrayMaxNumber = (array: number[]): number => {
  const maxNumber: number = array.reduce((a, b) => Math.max(a, b)); // используем метод reduce для нахождения самого большого числа
  return maxNumber;
};

//4. Написать функцию, которая на вход принимает строку и целое число и обрезает строку(первый аргумент),
// если она длиннее заданной максимальной длины строки(второй аргумент) и возвращает обрезанную строку с "..." в конце.
const editLine = (str: string, count: number): string => {
  let text: string = '';
  str.length > count ? (text = str.substring(0, count) + '...') : (text = str); // если длина строки больше заданной длины, то обрезаем строку
  return text;
};

//5. Написать функцию, которая на вход принимает строку и возвращает эту строку в формате:
//каждое слово начинается с заглавной буквы, остальные в нижнем регистре
const strUp = (str: string): string => {
  const text: string[] = str.split(' '); // разбиваем строку на слова
  const editorText: string[] = text.map(item => {
    return item.charAt(0).toUpperCase() + item.slice(1); // переводим первую букву в верхний регистр
  });
  return editorText.join(' ');
};

//6. Написать функцию, которая на вход принимает 2 массива и целое число n. Функция должна скопировать каждый элемент 1 массива
//во 2 по порядку начиная с индекса n второго массива и вернуть полученный массив. Входные массивы не должны изменяться.
//Например: при входных данных ([1,2,3], [4,5], 1) должно вернуться [4,1,2,3,5].
const unionArrays = (array: number[], array2: number[], n: number): number[] | string => {
  const resultArrays: number[] = []; // не изменяя исходный массив. slice делает именно это, возвращая новый массив
  resultArrays.push(...array, ...array2.slice(0, n)); // объединяем два массива и удаляем из второго массива n элементов
  return resultArrays;
};

//8. Написать функцию, которая на вход принимает массив, состоящий из двух строк
//Функция должна вернуть true, если строка в первом элементе массива содержит
//все буквы строки во втором элементе массива (регистр игнорируется)
const equalityStroke = (strArray: string[]): boolean | null | string => {
  if (strArray.length > 2) {
    return 'Ошибка вы не можете создать масссив больше двух элементов';
  }
  const result: boolean = strArray[0]
    .toLowerCase()
    .toUpperCase()
    .includes(strArray[1].toLowerCase().toUpperCase()); // проверяем одинаковы ли строки приведенные к нижнему регистру и верхнему
  return result.toString();
};

//9. Написать функцию, которая на вход принимает массив и целое число
//Функция должна разбить массив(первый аргумент) на группы длиной size
//(второй аргумент) и вернуть их в виде двумерного массива.
const subArrays = (array: string[], count: number): string[][] => {
  const result: string[][] = [];
  for (let i = 0; i < array.length; i += count) {
    const subArray = array.slice(i, i + count); // разбиваем на подмассивы длиной count
    result.push(subArray);
  }
  return result;
};

//10. Используя рекурсию(без использования циклов). Написать функцию,
//которая принимает массив и целое число (n) и заполняет массив числами от n до 1
const resultRecourse: number[] = [];
const recourse = (array: number[], count: number) => {
  if (count <= 0) {
    return;
  }
  array.push(count);
  recourse(array, count - 1);
};
// recourse(resultRecourse, 10);
