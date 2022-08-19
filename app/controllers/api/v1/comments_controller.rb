class Api::V1::CommentsController < ApplicationController

  def index

  end

  def create

  end


  privete

  def comments_params
    params.require(:comments).permit(:body)
  end
end
