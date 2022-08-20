class CommentsSerializer
  include JSONAPI::Serializer
  attributes :id, :body

  attribute :comment_user do |object|
    object.user.name.to_s
  end
end
