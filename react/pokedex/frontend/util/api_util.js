export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchOnePoke = poke => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${poke.id}`
  })
);
