class Api::V1::GreetingsController < ApplicationController
  def index
    @greeting = Message.order('RANDOM()').limit(1).first
    render json: { greeting: @greeting.text }
  end
end
