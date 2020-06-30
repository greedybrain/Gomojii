class EmojiSerializer
  include FastJsonapi::ObjectSerializer
  attributes :slug, :character
  belongs_to :user
end
