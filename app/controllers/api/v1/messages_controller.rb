class Api::V1::MessagesController < ApiController
  def random
    @random_message = Message.all.sample
    render json: @random_message 
  end
end
