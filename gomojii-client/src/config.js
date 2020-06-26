export const retrieveFrom = {
     userAttributes: {
          email: '',
          username: '',
          password: ''
     },
     thirdPartyApiEndpoints: {
          baseEndpoint: "https://emoji-api.com/emojis?",
          categoriesUrl: "https://emoji-api.com/categories?"
     },
     backendServerEndpoints: {
          baseUrl: "http://localhost:3001",
          sessions: "/sessions",
          registrations: "/registrations",
          logout: "/logout"
     },
     security: {
          accessKey: "access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321"
     }
}
