# == Schema Information
#
# Table name: interesting_technologies
#
#  id            :integer          not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  technology_id :integer          not null
#  user_id       :integer          not null
#
# Indexes
#
#  index_interesting_technologies_on_technology_id              (technology_id)
#  index_interesting_technologies_on_user_id                    (user_id)
#  index_interesting_technologies_on_user_id_and_technology_id  (user_id,technology_id) UNIQUE
#
# Foreign Keys
#
#  technology_id  (technology_id => technologies.id)
#  user_id        (user_id => users.id)
#
class InterestingTechnology < ApplicationRecord
  belongs_to :user
  belongs_to :technology

  validates :user_id, uniqueness: { scope: :technology_id }
end
