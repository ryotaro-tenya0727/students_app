Faraday.default_adapter = :net_http

class Api::V1::GithubOauthController < ApplicationController
  def callback
    conn = Faraday.new do |builder|
      builder.request :json
    end

    response = conn.post(ENV['GITHUB_FETCH_TOKEN_URL'],{client_id: ENV['REACT_APP_CLIENT_ID'], client_secret: ENV['CLIENT_SECRET'], code: params[:code] })
    # byebug
    # redirect_to '/registration'
  end
end
