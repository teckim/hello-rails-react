class Api::V1::MessagesController < ApiController
  def random
    @messages = Message.all
    render json: @messages 
  end
end
