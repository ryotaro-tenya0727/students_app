# == Schema Information
#
# Table name: user_relationships
#
#  id          :integer          not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  follow_id   :integer
#  follower_id :integer
#
# Indexes
#
#  index_user_relationships_on_follow_id                  (follow_id)
#  index_user_relationships_on_follow_id_and_follower_id  (follow_id,follower_id) UNIQUE
#  index_user_relationships_on_follower_id                (follower_id)
#
# Foreign Keys
#
#  follow_id    (follow_id => users.id)
#  follower_id  (follower_id => users.id)
#
class UserRelationship < ApplicationRecord
  belongs_to :follower, class_name: 'User'
  belongs_to :follow, class_name: 'User'
  validates :follow_id, uniqueness: { scope: :follower_id }
end
