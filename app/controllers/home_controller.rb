class HomeController < ApplicationController
  skip_before_action :authenticate_request # this will be implemented later
  def index
  end
end