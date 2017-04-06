export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchSinglePokemon = poke => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${poke.id}`
  })
);
