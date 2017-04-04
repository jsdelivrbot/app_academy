json.partial! 'api/guests/guest'


json.gifts @guest.gifts do |gift|
  json.(gift, :title, :description)
end

 # In your show view, render a guest's gifts. Only include the title and description. NB: Using json.array! at the top level here will cause our other guest information to break. Nest your data by passing it as an argument to json.gifts.
