import * as readlineSync from "readline-sync";
import movies from "../script";

const find = (): void => {
  const film: string = readlineSync.question(
    "Введите название фильма который вы хотите найти: "
  );
  let availability: boolean = true;
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.name.toLowerCase() === film.toLowerCase()) {
      availability = false;
      console.log(`\nФильм: ${movie.name}\nРейтинги:`);
      if (Object.keys(movie.ratings).length === 0)
        console.log("Оценок пока нет.");
      else {
        for (const user in movie.ratings) {
          console.log(`${user}: ${movie.ratings[user]}`);
        }
      }
    }
  }
  if (availability === true) console.log("Такого фильма нет!");
};

export default find;
