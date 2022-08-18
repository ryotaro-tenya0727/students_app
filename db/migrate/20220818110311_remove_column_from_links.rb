class RemoveColumnFromLinks < ActiveRecord::Migration[6.1]
  def change
    remove_column :links, :type
  end
end
