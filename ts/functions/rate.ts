import * as readlineSync from "readline-sync";
import movies from "../script";

const rate = (): void => {
  const film: string = readlineSync.question(
    "Введите название фильма который вы хотите оценить: "
  );
  let availability: boolean = true;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].name.toLowerCase() === film.toLowerCase()) {
      availability = false;
      const user: string = readlineSync.question("Введите имя пользователя: ");
      const rating: number = parseFloat(
        readlineSync.question("Введите оценку: ")
      );
      if (rating < 1 || rating > 10)
        console.log("Оценка может быть только от 1 до 10.");
      else if (isNaN(rating) === true)
        console.log("Введите корректный рейтинг!");
      else {
        movies[i].ratings[`${user}`] = rating;
        console.log(`Фильму ${film} выставлен рейтинг.`);
      }
    }
  }
  if (availability === true) console.log("Такого фильма нет!");
};

export default rate;
