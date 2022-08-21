# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_20_192509) do

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.integer "user_id", null: false
    t.integer "technology_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["technology_id"], name: "index_comments_on_technology_id"
    t.index ["user_id", "created_at"], name: "index_comments_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name", null: false
    t.index ["name"], name: "index_genres_on_name", unique: true
  end

  create_table "interesting_technologies", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "technology_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["technology_id"], name: "index_interesting_technologies_on_technology_id"
    t.index ["user_id", "technology_id"], name: "index_interesting_technologies_on_user_id_and_technology_id", unique: true
    t.index ["user_id"], name: "index_interesting_technologies_on_user_id"
  end

  create_table "links", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "link_type", null: false
    t.index ["user_id"], name: "index_links_on_user_id"
  end

  create_table "technologies", force: :cascade do |t|
    t.string "name", null: false
    t.string "kind", null: false
    t.index ["name"], name: "index_technologies_on_name", unique: true
  end

  create_table "technology_genres", force: :cascade do |t|
    t.integer "technology_id", null: false
    t.integer "genre_id", null: false
    t.index ["genre_id"], name: "index_technology_genres_on_genre_id"
    t.index ["technology_id"], name: "index_technology_genres_on_technology_id"
  end

  create_table "user_relationships", force: :cascade do |t|
    t.integer "follow_id"
    t.integer "follower_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["follow_id"], name: "index_user_relationships_on_follow_id"
    t.index ["follower_id"], name: "index_user_relationships_on_follower_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "comments", "technologies"
  add_foreign_key "comments", "users"
  add_foreign_key "interesting_technologies", "technologies"
  add_foreign_key "interesting_technologies", "users"
  add_foreign_key "links", "users"
  add_foreign_key "technology_genres", "genres"
  add_foreign_key "technology_genres", "technologies"
  add_foreign_key "user_relationships", "users", column: "follow_id"
  add_foreign_key "user_relationships", "users", column: "follower_id"
end
