class FloorsController < ApplicationController
  before_action :admin_user,     only: [:create, :edit, :update, :destroy]
  
  def index
    if params[:id]
      redirect_to floor_path(params[:id]) and return
    end
  end
  
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
  
  def update
    @floor = Floor.friendly.find(params[:id])
    if @floor.update_attributes(floor_params)
      flash[:success] = "Floor updated"
      redirect_to @floor
    else
      render 'edit'
    end
  end

  def destroy
    Floor.friendly.find(params[:id]).destroy
    flash[:success] = "Floor deleted"
    redirect_to(root_url)
  end
  
  private
  
    def floor_params
      params.require(:floor).permit(:title, :picture, :floor_level, :building, :campus)
    end

end
