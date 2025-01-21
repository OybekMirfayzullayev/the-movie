import axios from "axios";

export const apiClient = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTgzYTZiMmUxNjg0NzEwZTliMzBhZWIzNDAxYWMxNyIsIm5iZiI6MTczNTkxODUxNS4wODgsInN1YiI6IjY3NzgwM2IzNTVkNGIzOGY5MzY2OTc1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABA3YdebS4kM-F-DYb9mgWCuYzqua59_RY7z8x-l8qs'
      },
});