@pokemon.each do |pokemon|
  json.set! pokemon.id do
    json.(pokemon, :id, :name)
    json.image_url asset_path(pokemon.image_url)
  end
end

# refactoring of:
# json.array! @pokemon do |pokemon|
#   json.set! pokemon.id do
#     json.(pokemon, :id, :name)
#     json.image_url asset_path(pokemon.image_url)
#   end
# end
# 
# and:
#
# @pokemon.each do |poke|
#   json.set! poke.id do
#     json.extract! poke, :id, :name
#     json.image_url asset_path(poke.image_url)
#   end
# end
