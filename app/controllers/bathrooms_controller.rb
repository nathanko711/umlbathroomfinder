class BathroomsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :admin_user,     only: [:create, :destroy]
  
  def show
    @bathroom = Bathroom.friendly.find(params[:id])
    @reviews = @bathroom.reviews.paginate(page: params[:page])
    @review = Review.new
  end
  
  def new
    @bathroom = Bathroom.new
  end
  
  def create
    @floor = Floor.find(params[:floor_id])
    @bathroom = @floor.bathrooms.create(bathroom_params)
    if @bathroom.save
      redirect_to request.referrer
    else
      redirect_to request.referrer, :flash => { :danger => "Please make sure form is valid" }
    end
  end
  
  private
  
    def bathroom_params
      params.require(:bathroom).permit(:title, :picture, :coord, :shape)
    end
    

end
