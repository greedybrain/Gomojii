export const retrieveFrom = {
     thirdPartyApiEndpoints: {
          baseEndpoint: "https://emoji-api.com/emojis?",
          categoriesUrl: "https://emoji-api.com/categories?"
     },
     backendServerEndpoints: {
          // baseUrl: "http://localhost:3001/api/v1/",
          baseUrl: "https://gomojii.herokuapp.com",
          loggedIn: "/api/v1/logged_in",
          sessions: "/api/v1/sessions",
          registrations: "/api/v1/registrations",
          logout: "/api/v1/logout",
          users_path: '/api/v1/users',
          emojis_path: '/api/v1/emojis',
     },
     security: {
          accessKey: "access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321"
     },
     customMethods: {
          innyMinnyMineyMo: arr => {
               return arr[Math.floor(Math.random() * arr.length)]
          }
     }
}