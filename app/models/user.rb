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

  has_many :links, dependent: :destroy
  has_many :interesting_technologies, dependent: :destroy
  has_many :register_technologies, through: :interesting_technologies, source: :technology
  has_many :comments, dependent: :destroy
  has_many :comment_technologies, through: :comments, source: :technology
  # フォロー機能
  has_many :active_relationships, class_name: 'UserRelationship',
                                  foreign_key: 'follower_id',
                                  dependent: :destroy
  has_many :following, through: :active_relationships, source: :follow
  has_many :passive_relationships, class_name: 'UserRelationship',
                                   foreign_key: 'follow_id',
                                   dependent: :destroy
  has_many :followers, through: :passive_relationships, source: :follower

  # 通知機能
  has_many :active_notifications, class_name: "Notification", foreign_key: "notifier_id", dependent: :destroy
  has_many :passive_notifications, class_name: "Notification", foreign_key: "notified_id", dependent: :destroy

  validates :email, presence: true
  validates :email, uniqueness: true
  validates :name, presence: true
  validates :password, presence: true

  def follow(other_user)
    following << other_user
  end

  def unfollow(other_user)
    active_relationships.find_by(follow_id: other_user.id).destroy
  end

  def following?(other_user)
    other_user.followers.include?(self)
  end

  def create_notification_follow(notified_user)
    temp = Notification.where(["notifier_id = ? and notified_id = ? and action = ? ", id, notified_user.id, 'follow'])
    if temp.blank?
      notification = active_notifications.new(
        notified_id: notified_user.id,
        action: 'フォロー'
      )
      notification.save if notification.valid?
    end
  end

  def new_notifications_count
    notifications = Notification.where("notified_id = (:notified_id)", notified_id: id).pluck(:checked).tally[false]
    return notifications != nil ? notifications : 0
  end
end
