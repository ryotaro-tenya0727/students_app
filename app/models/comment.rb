# == Schema Information
#
# Table name: comments
#
#  id            :integer          not null, primary key
#  body          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  technology_id :integer          not null
#  user_id       :integer          not null
#
# Indexes
#
#  index_comments_on_technology_id  (technology_id)
#  index_comments_on_user_id        (user_id)
#
# Foreign Keys
#
#  technology_id  (technology_id => technologies.id)
#  user_id        (user_id => users.id)
#
class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :technology
end
