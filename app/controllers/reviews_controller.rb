class ReviewsController < ApplicationController


  def create
    @bathroom = Bathroom.find(params[:bathroom_id])
    @review = @bathroom.reviews.create(review_params)
    @review.user_id = current_user.id
    if @review.save
      redirect_to @bathroom, :flash => { :notice => "Your review has been submitted. Thanks!" }
    else
      redirect_to @bathroom, :flash => { :danger => "Please make sure form is valid" }
    end
  end

  private
  
    def review_params
      params.require(:review).permit(:user_id, :bathroom_id, :title, :content, :rating)
    end
end
