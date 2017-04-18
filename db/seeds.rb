User.create!(name:  "Admin User",
             email: "admin@umlbathroomfinder.com",
             password:              "adminpwd",
             password_confirmation: "adminpwd",
                          admin: true)

99.times do |n|
  name  = Faker::Name.name
  email = "example-#{n+1}@umlbathroomfinder.com"
  password = "password"
  User.create!(name:  name,
               email: email,
               password:              password,
               password_confirmation: password)
end