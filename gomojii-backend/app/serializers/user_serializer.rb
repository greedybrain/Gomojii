class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username

  attribute :emojis do |user|
    user.emojis.map do |emoji|
      {
        id: emoji.id,
        slug: emoji.slug,
        character: emoji.character
      }
    end
  end

end
