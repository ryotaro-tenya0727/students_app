class Technology < ApplicationRecord
  has_many :interesting_technologies
  has_many :users, through: :interesting_technologies, source: :user
end
