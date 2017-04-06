export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchSinglePokemon = id => {
  console.log('id arg in ApiUtil:');
  console.log(id);
  return $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  });
};
