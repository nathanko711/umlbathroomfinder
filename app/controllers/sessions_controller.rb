class SessionsController < ApplicationController

  def new
    if Rails.application.routes.recognize_path(request.referrer)[:controller] == "bathrooms"
      session[:forwarding_url] = request.referrer
    end
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      params[:session][:remember_me] == '1' ? remember(user) : forget(user)
      redirect_back_or user
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url, :flash => { :success => "You have successfully logged out. Thanks and have a good day!" }
  end
end