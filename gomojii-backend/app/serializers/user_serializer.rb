class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :emojis
  has_many :emojis
end
