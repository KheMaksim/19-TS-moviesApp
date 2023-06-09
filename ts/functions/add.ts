import * as readlineSync from "readline-sync";
import movies from "../script";

const add = (): void => {
  const film: string = readlineSync.question(
    "Введите название фильма который вы хотите добавить: "
  );
  if (film === "") console.log("Вы ничего не ввели, попробуйте еще раз.");
  else {
    let availability: boolean = true;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].name.toLowerCase() === film.toLowerCase()) {
        availability = false;
        console.log("Фильм уже есть в списке!");
      }
    }
    if (availability === true) {
      const newMovie: object = {
        name: film,
        ratings: {},
      };
      movies.push(newMovie);
      console.log(`Фильм ${film} добавлен.`);
    }
  }
};

export default add;
