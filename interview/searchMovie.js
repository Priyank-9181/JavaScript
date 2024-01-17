function search() {
    const searchValue = document.getElementById("search").value;
    const movie = [
        {
          "name": "The Shawshank Redemption",
          "rating": 9.3,
          "genre": ["Drama", "Crime"]
        },
        {
          "name": "Spirited Away",
          "rating": 8.8,
          "genre": ["Animation", "Fantasy", "Adventure"]
        },
        {
          "name": "The Dark Knight",
          "rating": 9.0,
          "genre": ["Action", "Crime", "Thriller"]
        },
        {
          "name": "Parasite",
          "rating": 8.6,
          "genre": ["Thriller", "Comedy", "Drama"]
        },
        {
          "name": "Inception",
          "rating": 8.8,
          "genre": ["Action", "Sci-Fi", "Thriller"]
        }
      ];

      const result = movie.filter(function (value,index,array) {
        const search = value.genre.search(searchValue);
        
      })
}