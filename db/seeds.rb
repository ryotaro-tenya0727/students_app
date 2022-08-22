# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
for i in (1..10) do
  user = User.create(email: "test#{i}@aa.com", name: "rest#{i}", password: "password")
  user.links.create([{link_type: [0,1,2].sample, url: "test-#{i}-url", user: user}])
  user.update(register_technology_ids: Technology.all.pluck(:id).sample(3))
end
