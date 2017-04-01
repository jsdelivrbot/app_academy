# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo0 = Todo.create!(
  title: "Drink kombucha",
  body: "so that my stomach will be happy",
  done: false,
  stepsHidden: true,
  stepFormHidden: true
)

todo1 = Todo.create!(
  title: "Drink coffee",
  body: "so that I will be awake",
  done: false,
  stepsHidden: true,
  stepFormHidden: true
)
