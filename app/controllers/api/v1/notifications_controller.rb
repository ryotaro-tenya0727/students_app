class Api::V1::NotificationsController < ApplicationController
  def index
    if current_user.nil?
      render json: 'Not logged_in'
    else
      @notifications = current_user.passive_notifications.preload(:notifier)
      notificaitons = NotificationSerializer.new(@notifications)
      render json: notificaitons

      @notifications.where(checked: false).each do |notification|
        notification.update(checked: true)
      end
    end
  end
end
