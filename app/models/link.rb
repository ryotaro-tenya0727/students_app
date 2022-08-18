# == Schema Information
#
# Table name: links
#
#  id         :integer          not null, primary key
#  type       :integer          not null
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_links_on_user_id  (user_id)
#
# Foreign Keys
#
#  user_id  (user_id => users.id)
#
class Link < ApplicationRecord
  belongs_to :user
  validates :url, presence: true
end
