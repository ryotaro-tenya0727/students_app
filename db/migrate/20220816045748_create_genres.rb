class CreateGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :genres do |t|
      t.string :name, null: false
    end
    add_index :genres, :name, unique: true
  end
end
