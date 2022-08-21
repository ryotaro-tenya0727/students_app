class CommentsNew < ActiveRecord::Migration[6.1]
  def change
    add_index :comments, [:user_id, :created_at]
  end
end
