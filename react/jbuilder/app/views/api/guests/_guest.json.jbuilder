json.(@guest, :name, :age, :favorite_color)

# refactoring of:
# json.name guest.name
# json.age guest.age
# json.favorite_color guest.favorite_color

# and of:
# json.extract! @guest, :name, :age, :favorite_color
