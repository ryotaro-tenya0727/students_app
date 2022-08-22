class Api::V1::UsersController < ApplicationController
  def index
    users = UsersSerializer.new(User.all)
    render json: users
  end
end
