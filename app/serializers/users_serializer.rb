class UsersSerializer
  include JSONAPI::Serializer
  attributes :id, :name

  def initialize(resource, options = {})
    @@options = options
    super(resource)
  end


  attribute :following do |user|
    current_user = @@options[:current_user]
    if current_user.nil?
      "Not Loggin"
    else
      current_user.following?(user)
    end
  end
end
