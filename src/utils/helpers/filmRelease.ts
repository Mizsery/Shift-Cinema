export const filmRelease = (country: string, releaseDate: string) => {
  if (releaseDate.length === 1 || !releaseDate) {
    return country;
  }
  return `${country}, ${releaseDate.split(' ').slice(-1)[0]}`;
};
