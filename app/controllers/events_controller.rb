class EventsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    if params[:datePicked]
      filter_date = DateTime.parse(params[:datePicked]).to_date
      @events = Event.where('extract(year from start) = ? and extract(month from start) = ? and extract(day from start) = ?', filter_date.year, filter_date.month, filter_date.day)
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
