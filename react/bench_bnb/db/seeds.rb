# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

Bench.create!(
  description: 'asdfasdfasdf',
  lat: 37.781707,
  lng: -122.424214
)

Bench.create!(
  description: 'qwerqwerqwer',
  lat: 37.751707,
  lng: -122.420094
)

Bench.create!(
  description: 'zxcvzxcvzxcv',
  lat: 37.769996,
  lng: -122.45
)
