Rails.application.routes.draw do
  get '/random_greeting', to: 'greetings#random_greeting'

  root 'static_pages#home'
end
