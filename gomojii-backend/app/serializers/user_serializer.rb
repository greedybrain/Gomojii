class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username

  attribute :emojis do |user|
    user.emojis.map do |emoji|
      
      {
        id: emoji.id,
        userId: emoji.user_id,
        slug: emoji.slug,
        character: emoji.character
      }
    end
  end

end
