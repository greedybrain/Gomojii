if Rails.env == "production"
     Rails.application.config.session_store :cookie_store, key: '_authentication', domain: 'https://gomojii.herokuapp.com'
else
     Rails.application.config.session_store :cookie_store, key: '_authentication'
end