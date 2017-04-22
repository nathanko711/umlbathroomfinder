class FloorsController < ApplicationController
  before_action :admin_user,     only: [:create, :edit, :update, :destroy]
  def show
    @floor = Floor.friendly.find(params[:id])
  end
  
  def new
    @floor = Floor.new
  end
  
  def create
    @floor = Floor.new(floor_params)
    if @floor.save
      redirect_to edit_floor_path(@floor)
    else
      render 'new'
    end
  end
  
  def edit
    @floor = Floor.friendly.find(params[:id])
    @bathroom = Bathroom.new
  end
  
  private
  
    def floor_params
      params.require(:floor).permit(:title, :picture)
    end

end
