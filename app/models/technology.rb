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
  has_many :interesting_technologies
  has_many :users, through: :interesting_technologies, source: :user
end
