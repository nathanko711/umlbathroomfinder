class Bathroom < ApplicationRecord
  belongs_to :floor
  has_many :reviews
  extend FriendlyId
  friendly_id :title, use: :slugged
end
