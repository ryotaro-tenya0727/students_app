class CreateInterestingTechnologies < ActiveRecord::Migration[6.1]
  def change
    create_table :interesting_technologies do |t|
      t.references :user, null: false, foreign_key: true
      t.references :technology, null: false, foreign_key: true

      t.timestamps
    end
    add_index :interesting_technologies, [:user_id, :technology_id], unique: true
  end
end
