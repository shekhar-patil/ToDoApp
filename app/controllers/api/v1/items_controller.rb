class Api::v1::ItemsController < ApplicationController
  def new
  end

  def show
    render json: Item.all
  end

  def create
  end

  private

  def item_params
    params.require(:item).parmit(:name , :mark)
  end

end

