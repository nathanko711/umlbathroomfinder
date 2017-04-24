class BathroomsController < ApplicationController
  before_action :admin_user,     only: [:create, :destroy, :edit]
  
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
  
  def edit
    @bathroom = Bathroom.friendly.find(params[:id])
  end
  
  def update
    @bathroom = Bathroom.friendly.find(params[:id])
    if @bathroom.update_attributes(bathroom_params)
      flash[:success] = "Bathroom updated"
      redirect_to @bathroom
    else
      render 'edit'
    end
  end
  
  private
  
    def bathroom_params
      params.require(:bathroom).permit(:title, :picture, :coord, :shape, :gender)
    end
    

end
