class Api::PostsController < ApplicationController
  before_action :authenticate_user!, :set_post, only: [:show, :update, :destroy]
  
    def index
      render json: Post.order(created_at: :desc)
    end
  
    def show
      render json: @post
    end
  
    def create
      @post = Post.new(post_params)
      if @post.save
        render json: @post
      else
        render json: { errors: @post.errors.full_messages.join(',') }, status: 422
      end
    end
  
    def update
      if @post.update(post_params)
        render json: @post
      else
        render json: { errors: @post.errors.full_messages.join(',') }, status: 422
      end
    end
  
    def destroy
      @post.destroy
    end
  
    private
      def set_post
        @post = Post.find(params[:id])
      end
  
      def post_params
        params.require(:post).permit(:body)
      end
  end