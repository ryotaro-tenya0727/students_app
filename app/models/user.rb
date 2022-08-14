class User < ApplicationRecord
  has_secure_password

  has_many :interesting_technologies
  has_many :interested_technologies, through: :interesting_technologies, source: :technology

  validates :email, presence: true
  validates :email, uniqueness: true
  validates :name, presence: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
end
