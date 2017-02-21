class GoalsController < ApplicationController
  def new
    @goal = Goal.new
  end

  def create
    @goal = Goal.new(goal_params)
    @goal.user_id = current_user.id

    if @goal.save
      redirect_to user_url(@goal.user)
    else
      flash[:errors] = @goal.errors.full_messages
      render :new
    end
  end

  def index
    @goals = Goal.all
  end

  def show
    @goal = Goal.find_by_id(params[:id])
  end

  def edit
    @goal = Goal.find_by_id(params[:id])
  end

  def update
    @goal = Goal.find_by_id(params[:id])

    if @goal.update(goal_params) && @goal.user_id == current_user.id
      redirect_to user_url(@goal.user)
    else
      flash[:errors] = @goal.errors.full_messages
      render :edit
    end
  end

  def destroy
    @goal = Goal.find_by_id(params[:id])
    @goal.destroy
    redirect_to user_url(@goal.user)
  end

  private
  def goal_params
    params.require(:goal).permit(:title, :user_id, :status, :privacy_setting, :description)
  end
end
