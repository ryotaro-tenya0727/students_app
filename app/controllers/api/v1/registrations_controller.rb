class Api::V1::RegistrationsController < ApplicationController
  def signup
    @user = RegistrationForm.new(registrations_params).save_user!
    if @user
      login!
      render json: { status: :created, user: @user }
    else
      render json: { status: 500 }
    end
  end

  private

  def registrations_params
    params.require(:user).permit(:email, :name, :password, links: [:url, :link_type], technology_ids: [])
  end
end
