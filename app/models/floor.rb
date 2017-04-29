class Floor < ApplicationRecord
  has_many :bathrooms, dependent: :destroy
  mount_uploader  :picture, PictureUploader
  validates :title, presence: true
  extend FriendlyId
  friendly_id :title, use: :slugged
end
