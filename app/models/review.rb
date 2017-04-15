class Review < ApplicationRecord
  belongs_to :user
  # belongs_to :bathroom
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  # validates :bathroom_id, presence: true
  validates :content, presence: true, length: { maximum: 500 }
  validates :title, presence: true, length: { maximum: 150 }
  validates :rating, presence: true, :inclusion => { :in => 0..5, :message => "Rating must be between 0 and 5 stars" }
end
