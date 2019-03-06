class Api::V1::ItemsController < ApplicationController
  
  def create
    @user = Item.create(user_params)
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:id, :name, :email, :encrypted_password);
  end
end
