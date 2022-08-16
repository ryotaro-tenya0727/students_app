class CreateTechnologyGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :technology_genres do |t|
      t.references :technology, null: false, foreign_key: true
      t.references :genre, null: false, foreign_key: true
    end
  end
end
