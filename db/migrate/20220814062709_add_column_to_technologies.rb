class AddColumnToTechnologies < ActiveRecord::Migration[6.1]
  def change
    add_column :technologies, :genre, :string, null: false
  end
end
