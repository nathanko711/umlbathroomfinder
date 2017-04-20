class AddCoordAndShapeToBathrooms < ActiveRecord::Migration[5.0]
  def change
    add_column :bathrooms, :coord, :string
    add_column :bathrooms, :shape, :string
  end
end
