json.partial! 'api/parties/party'

json.guests @party.guests do |guest|
  json.(guest, :name, :age, :favorite_color)
  json.gifts guest.gifts, :title, :description
end
