class Api::V1::RegistrationsController < ApplicationController
  def signup
    # @user = User.new(registrations_params)
    @user = User.new
    if @user.save
      login!
      render json: { status: :created, user: @user }
    else
      render json: { status: 500 }
    end
  end

  private

  def registrations_params
    params.require(:user).permit(userinfo: [:email, :name,  :password, :password_confirmation], links: [:url], technology_ids: [])
  end
end
