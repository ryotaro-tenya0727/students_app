# == Schema Information
#
# Table name: genres
#
#  id   :integer          not null, primary key
#  name :string           not null
#
# Indexes
#
#  index_genres_on_name  (name) UNIQUE
#
class Genre < ApplicationRecord
  has_many :technology_genres
  has_many :technologies, through: :technology_genres, source: :technology
end
