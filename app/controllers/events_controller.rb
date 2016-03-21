class EventsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    if params[:datePicked] && params[:utcOffset]
      filter_date_start = DateTime.parse(params[:datePicked]) + (params[:utcOffset].to_i/1440.0)
      @events = Event.where("start_time >= ? and start_time <=  ?", filter_date_start, filter_date_start.advance(:hours => 24))
    else
      @events = Event.all
    end
  end

  def show
  	
  	@event = Event.find(params[:id])

  end

  def create
    @event = Event.new(event_params)
    @event.save
    render 'show', status: 201
  end

   def update
    event = Event.find(params[:id])
    event.update_attributes(event_params)
    head :no_content
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    head :no_content
  end

  private
    def event_params
      params.require(:event).permit(:title,:description, :start, :end, :location, :logo)
    end
end
