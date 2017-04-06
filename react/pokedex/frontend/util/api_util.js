export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchSinglePokemon = poke => {
  console.log('in ApiUtil:');
  console.log(poke);
  return $.ajax({
    method: 'GET',
    url: `api/pokemon/${poke.id}`
  });
};
