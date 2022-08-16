# == Schema Information
#
# Table name: technologies
#
#  id    :integer          not null, primary key
#  genre :string           not null
#  name  :string           not null
#
# Indexes
#
#  index_technologies_on_name  (name) UNIQUE
#
class Technology < ApplicationRecord
  has_one :technology_genre
  has_one :genre, through: :technology_genre, source: :genre

  has_many :interesting_technologies, dependent: :destroy
  has_many :users, through: :interesting_technologies, source: :user
  validates :name, presence: true
  validates :genre, presence: true
end
