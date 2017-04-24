class AddCampusToFloors < ActiveRecord::Migration[5.0]
  def change
    add_column :floors, :campus, :string
  end
end
