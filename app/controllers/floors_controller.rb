class FloorsController < ApplicationController
  
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
  end
  
  private
  
    def floor_params
      params.require(:floor).permit(:title, :picture)
    end

end
