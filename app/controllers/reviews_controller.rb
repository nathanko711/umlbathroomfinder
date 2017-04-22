class ReviewsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]

  def create
    @bathroom = Bathroom.find(params[:bathroom_id])
    @review = @bathroom.reviews.create(review_params)
    @review.user_id = current_user.id
    if @review.save
      redirect_to request.referrer, :flash => { :success => "Your review has been submitted. Thanks!" }
    else
      redirect_to request.referrer, :flash => { :danger => "Please make sure form is valid" }
    end
  end
  
  def destroy
    Review.find(params[:id]).destroy
    flash[:success] = "Review deleted"
    redirect_to request.referrer
  end

  private
  
    def review_params
      params.require(:review).permit(:user_id, :bathroom_id, :title, :content, :rating)
    end

end
