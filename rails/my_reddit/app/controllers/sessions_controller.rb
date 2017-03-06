class SessionsController < ApplicationController
  def new
    logged_in? ? (redirect_to user_url(current_user)) : (render :new)
  end

  def create
    redirect_to user_url(current_user)  if logged_in?
    @user = User.find_by(username: params[:user][:username])
    if @user
      login(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = ["Invalid login credentials"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
