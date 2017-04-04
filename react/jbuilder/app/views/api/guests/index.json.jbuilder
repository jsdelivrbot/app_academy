json.array! @guests do |guest|
  json.(guest, :name, :age, :favorite_color)
end
