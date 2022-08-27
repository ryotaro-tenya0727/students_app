class Api::V1::UserRelationshipsController < ApplicationController
  def create
    other_user = User.find_by(id: params[:id])
    current_user.follow(other_user)
    current_user.create_notification_follow(other_user)
    head :ok
  end

  def destroy
    other_user = User.find_by(id: params[:id])
    current_user.unfollow(other_user)
    head :ok
  end
end
