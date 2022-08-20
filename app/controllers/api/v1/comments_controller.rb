class Api::V1::CommentsController < ApplicationController
  before_action :set_technology

  def index
    comments = @technology.comments.all.preload(:user)
    render json: {comments: comments, technology_name: @technology.name}
  end

  def create
    ActiveRecord::Base.transaction do
      comment = current_user.comments.build(comments_params).merge(technology: @technology)
      comment.save!
    end
  end

  private

  def set_technology
    @technology = Technology.find_by!(id: params[:technology_id])
  end

  def comments_params
    params.require(:comments).permit(:body)
  end
end
