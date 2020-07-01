class User < ApplicationRecord
     has_secure_password
     validates :username, :email, presence: true, uniqueness: true

     has_many :emojis, dependent: :destroy
end
