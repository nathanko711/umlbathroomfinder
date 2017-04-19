class Bathroom < ApplicationRecord
  has_many :reviews
  extend FriendlyId
  friendly_id :title, use: :slugged
end
