class Emoji < ApplicationRecord
     belongs_to :user, optional: true

     validates :slug, :character, uniqueness: true, message: "is already saved"
end