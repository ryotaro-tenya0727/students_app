class Api::V1::UsersController < ApplicationController
  def index
    users = UsersSerializer.new(User.all.preload(:passive_relationships), current_user: current_user)
    render json: users
  end
end
