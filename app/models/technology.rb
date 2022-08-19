# == Schema Information
#
# Table name: technologies
#
#  id   :integer          not null, primary key
#  kind :string           not null
#  name :string           not null
#
# Indexes
#
#  index_technologies_on_name  (name) UNIQUE
#
class Technology < ApplicationRecord
  has_one :technology_genre, dependent: :destroy
  has_one :genre, through: :technology_genre, source: :genre

  has_many :interesting_technologies, dependent: :destroy
  has_many :users, through: :interesting_technologies, source: :user
  has_many :comments
  has_many :comment_users, through: :comments, source: :user

  validates :name, presence: true
  validates :kind, presence: true
end
