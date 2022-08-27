class ApplicationController < ActionController::Base
  # csrfトークンの確認をスキップ
  # skip_before_action :verify_authenticity_token

  def login!
    session[:user_id] = @user.id
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  private

  def set_csrf_token
    cookies['CSRF-TOKEN'] = form_authenticity_token
  end
end
