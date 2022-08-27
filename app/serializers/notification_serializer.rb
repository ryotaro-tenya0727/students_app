class NotificationSerializer
  include JSONAPI::Serializer
  attributes :action, :checked
end
