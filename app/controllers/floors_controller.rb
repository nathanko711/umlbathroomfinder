class FloorsController < ApplicationController
  before_action :admin_user,     only: [:create, :edit, :update, :destroy]
  def show
    @floor = Floor.friendly.find(params[:id])
    @bathroom = Bathroom.new
  end
  
  def new
    @floor = Floor.new
  end
  
  def create
    @floor = Floor.new(floor_params)
    if @floor.save
      redirect_to @floor
    else
      render 'new'
    end
  end
  
  def edit
    @floor = Floor.friendly.find(params[:id])
  end
  
  private
  
    def floor_params
      params.require(:floor).permit(:title, :picture, :floor_level, :building, :campus)
    end

end
