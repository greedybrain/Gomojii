export const retrieveFrom = {
     thirdPartyApiEndpoints: {
          baseEndpoint: "https://emoji-api.com/emojis?",
          categoriesUrl: "https://emoji-api.com/categories?"
     },
     backendServerEndpoints: {
          // baseUrl: "http://localhost:3001/api/v1",
          baseUrl: "http://gomojii.herokuapp.com/",
          loggedIn: "logged_in",
          sessions: "sessions",
          registrations: "registrations",
          logout: "logout",
          users_path: 'users',
          emojis_path: 'emojis',
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