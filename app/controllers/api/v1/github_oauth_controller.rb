Faraday.default_adapter = :net_http

class Api::V1::GithubOauthController < ApplicationController
  def callback
    conn = Faraday.new do |builder|
      builder.request :json
    end
    response = conn.post(ENV['GITHUB_FETCH_TOKEN_URL'],{client_id: ENV['REACT_APP_CLIENT_ID'], client_secret: ENV['CLIENT_SECRET'], code: params[:code] })
    access_token = Rack::Utils.parse_nested_query(response.body)["access_token"]

    req = Faraday.new(
      url: "#{ENV['GITHUB_API_URL']}/user",
      headers: {"Authorization": "token #{access_token}"}
    )
    user_response = req.get
    user_info = JSON.parse(user_response.body)
    image_url = user_info["avatar_url"]
    redirect_to "#{Settings.host}/registration?image_url=#{image_url}"
  end
end
