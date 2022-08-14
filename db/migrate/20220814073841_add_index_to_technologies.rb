class AddIndexToTechnologies < ActiveRecord::Migration[6.1]
  def change
    add_index :technologies, :name, unique: true
  end
end
