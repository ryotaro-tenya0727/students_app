# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  name            :string           not null
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#
class User < ApplicationRecord
  has_secure_password

  has_many :interesting_technologies, dependent: :destroy
  has_many :register_technologies, through: :interesting_technologies, source: :technology
  has_many :links, dependent: :destroy

  validates :email, presence: true
  validates :email, uniqueness: true
  validates :name, presence: true
  validates :password, presence: true
end
