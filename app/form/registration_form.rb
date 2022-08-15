class RegistrationForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :email, :string
  attribute :name, :string
  attribute :password, :string
  attribute :links
  attribute :technology_ids

  def save_user!
    user = User.new(email: email, name: name, password: password)
    return false if user.invalid?
    user.save
    user.links.create(links)
    user.update(register_technology_ids: technology_ids) if !technology_ids.empty?
    user
  end
end
