class HomeController < ApplicationController
  def index
    gon.REACT_APP_CLIENT_ID = ENV['REACT_APP_CLIENT_ID']
  end
end
