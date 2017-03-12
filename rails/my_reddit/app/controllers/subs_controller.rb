class SubsController < ApplicationController
  before_action :logged_in?

  skip_before_action :logged_in?, :only => [:index, :show]

  def index
    @subs = Sub.all
  end

  def show
    @sub = Sub.find(params[:id])
    @sub.nil? ? (redirect_to subs_url) : (render :show)
  end

  def new
    @sub = Sub.new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.user_id = current_user.id
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def edit
    @sub = Sub.find(params[:id])
    render :edit
  end

  def update
    @sub = Sub.find(params[:id])
    if @sub.update_attributes(sub_params)
      redirect_to sub_url(@sub)
    else
      render :edit
    end
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description, :user_id)
  end
end
