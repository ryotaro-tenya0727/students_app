# == Schema Information
#
# Table name: technologies
#
#  id   :integer          not null, primary key
#  kind :string           not null
#  name :string           not null
#
# Indexes
#
#  index_technologies_on_name  (name) UNIQUE
#
class TechnologySerializer
  include JSONAPI::Serializer
  attributes :id, :name, :kind

  attribute :genre do |object|
    "#{object.genre.name}"
  end
end
