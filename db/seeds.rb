require 'faker'

Message.destroy_all


5.times do 
  Message.create(text: Faker::Lorem.paragraph)
end
