import * as readlineSync from "readline-sync";
import movies from "../script";

const deleteFn = (): void => {
  if (movies.length <= 0) console.log("Нечего удалять");
  else {
    const film: string = readlineSync.question(
      "Введите название фильма который вы хотите удалить: "
    );
    if (film === "") console.log("Вы ничего не ввели, попробуйте еще раз.");
    else {
      let availability: boolean = true;
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].name.toLowerCase() === film.toLowerCase()) {
          availability = false;
          movies.splice(i, 1);
          console.log(`Фильм ${film} удален.`);
        }
      }
      if (availability === true) console.log("Такого фильма нет!");
    }
  }
};

export default deleteFn;
