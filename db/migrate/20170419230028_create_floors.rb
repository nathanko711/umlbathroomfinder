class CreateFloors < ActiveRecord::Migration[5.0]
  def change
    create_table :floors do |t|
      t.string :title
      t.string :slug
      t.string :picture

      t.timestamps
    end
    add_index :floors, :slug, unique: true
  end
end
