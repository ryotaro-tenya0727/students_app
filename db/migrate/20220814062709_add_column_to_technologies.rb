class AddColumnToTechnologies < ActiveRecord::Migration[6.1]
  def change
    add_column :technologies, :kind, :string, null: false
  end
end
