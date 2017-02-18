class PostsController < ApplicationController
  before_action :logged_in?

  skip_before_action :logged_in?, :only => [:show]

  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.subs = params[:sub_id]
    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
    render :edit
  end

  def update
    @post = Post.find(params[:id])
    @post.user_id = current_user.id
    if @post.update_attributes(post_params)
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def destroy
  end

  def show
    if request.original_url.match(/posts\/new/)
      @post = Post.find_by(sub_id: params[:id])
    else
      @post = Post.find_by(id: params[:id])
    end
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end
end
