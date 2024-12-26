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
const stroke = (str: string): string => {
  let text: string[] = str.split(' '); // разбиваем строку на слова

  let string: string = text.reduce((longest, current) => {
    return current.length > longest.length ? current : longest; // используем метод reduce для нахождения самого длинного слова(1 значение будет самым длинным словом, 2 значение - текущее слово)
  }, '');
  return string;
};

const arrayFunc = (array: number[]): number => {
  let maxNumber: number = array.reduce((a, b) => Math.max(a, b)); // используем метод reduce для нахождения самого большого числа
  return maxNumber;
};

const editStroke = (str: string, count: number): string => {
  let stroke: string = str;
  if (str.length <= count) {
    return (stroke = str);
  }
  if (str.length > count) {
    stroke = str.substring(0, count) + '...'; // срезаем строку до нужного количества символов
  }

  return stroke;
};

const strUp = (str: string): string => {
  let text: string[] = str.split(' '); // разбиваем строку на слова

  let string: string[] = text.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1); // переводим первую букву в верхний регистр
  });
  return string.join(' ');
};

const arrays = (array: number[], array2: number[], n: number): number[] | string => {
  let resultArrays: number[] = [];
  resultArrays.push(...array, ...array2.splice(0, n)); // объединяем два массива и удаляем из второго массива n элементов
  return resultArrays;
};

const strArray = (strArray: string[]): boolean | null | string => {
  if (strArray.length > 2) {
    return 'Ошибка вы не можете создать масссив больше двух элементов';
  }

  let result: boolean = strArray[0]
    .toLowerCase()
    .toUpperCase()
    .includes(strArray[1].toLowerCase().toUpperCase()); // проверяем одинаковы ли строки
  return result.toString();
};

const func9 = (array: string[], count: number): string[][] => {
  const result: string[][] = [];

  for (let i = 0; i < array.length; i += count) {
    const subArray = array.slice(i, i + count); // разбиваем на подмассивы длиной count
    result.push(subArray);
  }
  return result;
};

// 10 Функция рекурсия
const resultRecourse: number[] = [];
const recourse = (array: number[], count: number) => {
  if (count < 1) {
    return 'Значение не может быть отрицательным или равным нулю';
  }
  array.push(count);
  recourse(array, count - 1);
};
// recourse(resultRecourse, 10);
