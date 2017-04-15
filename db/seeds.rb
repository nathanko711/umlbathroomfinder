User.create!(name:  "Example User",
             email: "example@railstutorial.org",
             password:              "foobar",
             password_confirmation: "foobar",
                          admin: true)

99.times do |n|
  name  = Faker::Name.name
  email = "example-#{n+1}@railstutorial.org"
  password = "password"
  User.create!(name:  name,
               email: email,
               password:              password,
               password_confirmation: password)
end

users = User.order(:created_at).take(6)
50.times do
  title = Faker::Lorem.sentence(2)
  content = Faker::Lorem.sentence(5)
  rating = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].sample
  users.each { |user| user.reviews.create!(content: content, title: title, rating: rating) }
end