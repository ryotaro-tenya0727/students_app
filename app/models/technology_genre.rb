# == Schema Information
#
# Table name: technology_genres
#
#  id            :integer          not null, primary key
#  genre_id      :integer          not null
#  technology_id :integer          not null
#
# Indexes
#
#  index_technology_genres_on_genre_id       (genre_id)
#  index_technology_genres_on_technology_id  (technology_id)
#
# Foreign Keys
#
#  genre_id       (genre_id => genres.id)
#  technology_id  (technology_id => technologies.id)
#
class TechnologyGenre < ApplicationRecord
  belongs_to :technology
  belongs_to :genre
end
