# == Schema Information
#
# Table name: notifications
#
#  id          :integer          not null, primary key
#  action      :string           default(""), not null
#  checked     :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  notified_id :integer          not null
#  notifier_id :integer          not null
#
# Indexes
#
#  index_notifications_on_notified_id  (notified_id)
#  index_notifications_on_notifier_id  (notifier_id)
#
# Foreign Keys
#
#  notified_id  (notified_id => users.id)
#  notifier_id  (notifier_id => users.id)
#
class Notification < ApplicationRecord
  default_scope -> { order(created_at: :desc) }

  belongs_to :notifier, class_name: 'User'
  belongs_to :notified, class_name: 'User'
end
