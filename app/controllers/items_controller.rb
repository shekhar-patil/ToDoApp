class ItemsController < ApplicationController
  def new
  end

  def show
    @items = Item.all()
  end

  def create
  end
end
