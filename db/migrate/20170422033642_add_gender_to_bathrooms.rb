class AddGenderToBathrooms < ActiveRecord::Migration[5.0]
  def change
    add_column :bathrooms, :gender, :integer
  end
end
