class AddFloorLevelAndBuildingToFloors < ActiveRecord::Migration[5.0]
  def change
    add_column :floors, :floor_level, :integer
    add_column :floors, :building, :string
  end
end
