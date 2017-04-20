class ReviewsController < ApplicationController


  def create
    @bathroom = Bathroom.find(params[:bathroom_id])
    @review = @bathroom.reviews.create(review_params)
    @review.user_id = params[:user_id]
    if @review.save
      redirect_to @bathroom, :flash => { :notice => "Your review has been submitted. Thanks!" }
    else
      redirect_to edit_floor_path(@floor), :flash => { :danger => "Please make sure form is valid" }
    end
  end

  private
  
    def review_params
      params.require(:bathroom).permit(:user_id, :bathroom_id, :title, :content, :rating)
    end
end
