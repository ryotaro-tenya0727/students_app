class Api::V1::NotificationsController < ApplicationController
  def index
    if current_user.nil?
      render json: 'Not logged_in'
    else
      @notifications = current_user.passive_notifications

      @notifications.where(checked: false).each do |notification|
        notification.update(checked: true)
      end

      notificaitons = NotificationSerializer.new(@notifications)
      render json: notificaitons
    end
  end
end
