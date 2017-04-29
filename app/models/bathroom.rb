class Bathroom < ApplicationRecord
  belongs_to :floor
  has_many :reviews, dependent: :destroy
  mount_uploader  :picture, PictureUploader
  extend FriendlyId
  friendly_id :title, use: :slugged
  validates :coord, presence: true
  validates :shape, presence: true
  validates :gender, presence: true
end
