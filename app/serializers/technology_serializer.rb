class TechnologySerializer
  include JSONAPI::Serializer
  attributes :id, :name, :kind

  attribute :genre do |object|
    "#{object.genre}"
  end
end
