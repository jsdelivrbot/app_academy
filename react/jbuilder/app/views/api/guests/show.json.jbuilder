json.partial! 'api/guests/guest'

json.gifts @guest.gifts do |gift|
  json.(gift, :title, :description)
end
