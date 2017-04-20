class AddFloorToBathrooms < ActiveRecord::Migration[5.0]
  def change
    add_reference :bathrooms, :floor, foreign_key: true
  end
end
