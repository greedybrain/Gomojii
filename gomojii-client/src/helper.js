export const helper = {
     userIsLoggedIn: userData => {
          return userData.user !== undefined
     },
     currentUser: userData => {
          const { id, attributes: attrs } = userData.user.data
          let { email, username, emojis } = attrs
          //Standardize username
          username = username.slice(0, 1).toUpperCase() + username.slice(1)
          return {
               id,
               email,
               username,
               emojis
          }
     },
}