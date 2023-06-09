import * as readlineSync from "readline-sync";
import add from "./functions/add";
import deleteFn from "./functions/deleteFn";
import list from "./functions/list";
import rate from "./functions/rate";
import find from "./functions/find";

const movies: any = [
  {
    name: "Interstellar",
    ratings: {
      John: 10,
      Jack: 3,
    },
  },
  {
    name: "Avengers: Infinity War",
    ratings: {
      Jack: 9,
      Jane: 10,
    },
  },
];
export default movies;

while (true) {
  const menu: string = readlineSync.question(
    `\nВыберите действие(введите цифру или слово)\n1. Добавить\n2. Удалить\n3. Список\n4. Оценить\n5. Найти\n6. Отмена\nВыбрать:`
  );
  if (menu === "Добавить" || menu === "1") add();
  else if (menu === "Удалить" || menu === "2") deleteFn();
  else if (menu === "Список" || menu === "3") list();
  else if (menu === "Оценить" || menu === "4") rate();
  else if (menu === "Найти" || menu === "5") find();
  else if (menu === "Отмена" || menu === "6") {
    console.log(`Действие отменено`);
    break;
  } else console.log("Вы ввели неверную команду попробуйте еще раз");
}
