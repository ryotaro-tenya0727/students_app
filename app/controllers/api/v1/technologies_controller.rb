class Api::V1::TechnologiesController < ApplicationController
  def index
    technologies = Technology.all.preload(:genre)
    render_json = TechnologySerializer.new(technologies).serializable_hash.to_json
    render json: render_json, status: :ok
  end
end
