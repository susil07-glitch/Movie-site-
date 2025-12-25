import { GenersList } from "../../src/Geners/Geners";

const useGenereConverter = () => {
  const convertGenere = (genreIds) => {
    const genresConvertedList = [];
    genreIds
      .slice(0, 3)
      .map((genreId) =>
        GenersList
          .filter((el) => el.id === genreId)
          .map((el) => genresConvertedList.push(el.name))
      );

    return genresConvertedList;
  };

  return { convertGenere };
};

export default useGenereConverter;
