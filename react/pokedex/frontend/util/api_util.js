// Inside this file, we'll define functions that make ajax requests fetching information from our rails api.
// Export a function called fetchAllPokemon that returns a promise.
// The function should make an AJAX request that will make a http request to our PokemonController#index endpoint.
// Run rake routes to determine the appropriate url for this request.


export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);
// 
// export const createTodo = todo => {
//   return $.ajax({
//     method: 'POST',
//     url: 'api/todos',
//     data: todo
//   });
// };
