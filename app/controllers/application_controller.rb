class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def hello
    render html: "This is a placeholder for UMLBathroomFinder"
  end
end