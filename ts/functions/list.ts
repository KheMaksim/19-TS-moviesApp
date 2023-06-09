import movies from "../script";

const list = (): void => {
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    console.log(`\nФильм: ${movie.name}\nРейтинги:`);
    if (Object.keys(movie.ratings).length === 0)
      console.log("Оценок пока нет.");
    else {
      for (const user in movie.ratings) {
        console.log(`${user}: ${movie.ratings[user]}`);
      }
    }
  }
};

export default list;
