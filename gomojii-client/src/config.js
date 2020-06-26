export const retrieveFrom = {
     userAttributes: {
          email: '',
          username: '',
          password: '',
          loggedInStatus: "NOT_LOGGED_IN",
     },
     thirdPartyApiEndpoints: {
          baseEndpoint: "https://emoji-api.com/emojis?",
          categoriesUrl: "https://emoji-api.com/categories?"
     },
     backendServerEndpoints: {
          baseUrl: "http://localhost:3001",
          loggedIn: "/logged_in",
          sessions: "/sessions",
          registrations: "/registrations",
          logout: "/logout"
     },
     security: {
          accessKey: "access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321"
     }
}
