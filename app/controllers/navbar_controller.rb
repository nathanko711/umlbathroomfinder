class NavbarController < ApplicationController

  def create
    building_hash = { 'Etic':'ETIC', 'Alumni_library':'Alumni Library', 'Lydon_library':'Lydon Library', 'Eames_hall':'Eames Hall', 'Cumnock_hall':'Cumnock Hall', 'Southwick_hall':'Southwick Hall', 'Pasteur_hall':'Pasteur Hall', 'Kitson_hall':'Kitson Hall', 'Ball_hall':'Ball Hall', 'Olsen_hall':'Olsen Hall', 'Falmouth_hall':'Falmouth Hall', 'Engineering_building':'Engineering Building', 'Olney_hall':'Olney Hall', 'Pinanski_hall':'Pinanski Hall', 'Costello_gym':'Costello Gym', 'Durgin_hall':'Durgin Hall', 'Health_and_social_sciences_building':'Health and Social Sciences Building', 'Oleary_library':'O’Leary Library', 'Mcgauvran_student_union':'McGauvran Student Union', 'Concordia_hall':'Concordia Hall', 'Weed_hall':'Weed Hall', 'South_side_cafe/dining_hall':'South Side Cafe/Dining Hall', 'Coburn_hall':'Coburn Hall', 'Sheehy_hall':'Sheehy Hall', 'Allen_house':'Allen House', 'Dugan_hall':'Dugan Hall', 'Mahoney_hall':'Mahoney Hall' }
    @floor = Floor.find_by(building: building_hash[params[:selectpicker2].to_sym], floor_level: params[:selectpicker3])
    if @floor
      redirect_to @floor
    end
    
  end
end
