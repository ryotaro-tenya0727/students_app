class AddIndexToRelation < ActiveRecord::Migration[6.1]
  def change
    add_index :user_relationships, [:follow_id, :follower_id], unique: true
  end
end
