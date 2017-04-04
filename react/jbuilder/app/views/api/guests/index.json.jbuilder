json.array! @guests do |guest|
  json.(guest, :name, :age, :favorite_color) if guest.age.between?(40, 50)
end
