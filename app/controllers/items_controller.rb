class ItemsController < ApplicationController
  def new
  end

  def show
    @Item = Item.all()
  end

  def create
  end
end
