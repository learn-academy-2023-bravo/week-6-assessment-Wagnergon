# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This manages blog posts, the index is for displaying a list of blog posts
class BlogPostsController < ApplicationController
  def index
    # ---2) Retrieves all the records blog posts model
    @posts = BlogPost.all
  end

  # ---3)Show action displays a single record, here its a single blog post and finds it using the ID paramater
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Code snippet that defines action for new, New is used to display the form for a new post. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This creates a new blog post record in the database as long as it meets the blog post paramaters. If it is valid itll redirect to you all the posts. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This is used to find the blog post to be displayed using the ID as an argument
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)The update method updates the values of the record in the blog post paramaters. Valid? is checking to make sure it has the right validations if so redirect to index
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)Redirects to the index of the blog post
      redirect_to blog_posts_path
    end
  end

  # ---9)It allows only the paramaters we want into the model from a submission, protects our model from unwanted data
  private
  def blog_post_params
    # ---10) Whats permitted for this blog post model is the title and the content
    params.require(:blog_post).permit(:title, :content)
  end
end
