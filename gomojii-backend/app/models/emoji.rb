class Emoji < ApplicationRecord
     belongs_to :user, optional: true
end