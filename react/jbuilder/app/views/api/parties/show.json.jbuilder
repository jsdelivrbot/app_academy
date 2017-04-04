json.partial! 'api/parties/party'

json.guests @party.guests do |guest|
  json.(guest, :name, :age, :favorite_color)
end
