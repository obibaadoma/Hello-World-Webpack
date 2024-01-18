class GreetingsController < ApplicationController
  def random_greeting
    greetings = ['Hello', 'Hi', 'Hola', 'Bonjour', 'Guten Tag']
    render json: { greeting: greetings.sample }
  end
end
