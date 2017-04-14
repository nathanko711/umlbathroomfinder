class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.text :content
      t.references :user, foreign_key: true
      t.references :bathroom, foreign_key: true
      t.integer :rating

      t.timestamps
    end
    add_index :reviews, [:user_id, :created_at, :bathroom_id]
  end
end
