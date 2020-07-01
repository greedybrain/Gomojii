class EmojiSerializer
  include FastJsonapi::ObjectSerializer
  attributes :slug, :character
  belongs_to :user

  attribute :user do |emoji|
    {
      id: emoji.user.id,
      username: emoji.user.username
    }
  end

end
