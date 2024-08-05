export const filmRelease = (country: string, releaseDate: string) => {
  if (releaseDate.length === 1) {
    return country;
  }
  return `${country}, ${releaseDate.split(' ')[2]}`;
};
