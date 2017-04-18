class CreateBathrooms < ActiveRecord::Migration[5.0]
  def change
    create_table :bathrooms do |t|
      t.string :title
      t.string :slug

      t.timestamps
    end
    add_index :bathrooms, :slug, unique: true
  end
end
