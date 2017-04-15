class AddTitleToReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :title, :text
  end
end
