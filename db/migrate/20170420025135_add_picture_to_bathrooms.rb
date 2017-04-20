class AddPictureToBathrooms < ActiveRecord::Migration[5.0]
  def change
    add_column :bathrooms, :picture, :string
  end
end
