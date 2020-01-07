class PagesController < ApplicationController
  before_action :authenticate_user!, except: [:about]
  def index
  end

  def about
  end
end
