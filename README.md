# UML Bathroom Finder
##https://umlbathroomfinder.herokuapp.com/

### This is a project made during Spring 2017 for GUI II class at UML with Prof. Wenjin Zhou

### The contributors are Nathan Ko, Scott Mello, Jacob Rothmel, and Chuong Vu

The main features of this web application was to:

* Enable students at UML to find the nearest bathrooms easily

* Utilize Google maps API to easily locate the building the User is in.

* Make creating / deleting of new buildings / floors / bathroom accessible through the browser

* Enable an easy way for Admins to delete / manage users and their reviews

* Write reviews for bathrooms

* And see the average ratings of bathrooms

* Real time chat

* Built using Ruby on Rails

* And represents hundreds of hours of our hard work... learning Ruby then Rails!


Installation / Running it Locally
-------------

#### 1. Make sure Ruby is installed on your system. Open command prompt and type `ruby -v` to check which version.

#### 2. Make sure Rails is installed too. Type `rails -v` to check which version.

#### 3. Clone our git repository

`git clone https://github.com/nathanko711/umlbathroomfinder`

#### 4. Install all dependencies. If error message about an older bundler comes up, run `bundle update` before running `bundle install`

`bundle install`

#### 5. Migrate the database

`rails db:migrate`

#### 6. Run the server then navigate to your localhost.

`rails server`