class CreateNotifications < ActiveRecord::Migration[6.1]
  def change
    create_table :notifications do |t|
      t.references :notifier, foreign_key: { to_table: :users }, null: false
      t.references :notified, foreign_key: { to_table: :users }, null: false
      t.string :action, default: '', null: false
      t.boolean :checked, default: false, null: false
      t.timestamps
    end
  end
end
