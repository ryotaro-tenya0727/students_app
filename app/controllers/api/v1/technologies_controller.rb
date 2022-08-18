class Api::V1::TechnologiesController < ApplicationController
  def index
    technologies = Technology.all
    render_json = TechnologySerializer.new(technologies)
    render json: json_string
  end
end
