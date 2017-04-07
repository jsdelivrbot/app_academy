export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchSinglePokemon = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  });
};
