class AddLinkTypeToLinks < ActiveRecord::Migration[6.1]
  def change
    add_column :links, :link_type, :integer, null: false
  end
end
