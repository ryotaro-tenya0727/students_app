class UsersSerializer
  include JSONAPI::Serializer
  attributes :id, :name
end
