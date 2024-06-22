import React from 'react';
import { useParams } from 'react-router-dom';
import BlogsData from './BlogsData.json';

const Blog = () => {
  const { id } = useParams();
  const blog = BlogsData.find(blog => blog.id === parseInt(id));
  console.log(blog)

  if (!blog) {
    return <div>Blog not found</div>;
  }
  
  return (
    <>
      <section id="blog" className="blog-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">{blog.title}</h3>
                <p className="subtitle-a">
                  By {blog.author} | {blog.date}
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-blog">
                <div className="card-img">
                  <img src={blog.image} alt="" className="w-full h-[350px] object-cover" />
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    {/* <div className="card-category">
                      <h6 className="category">{blog.category}</h6>
                    </div> */}
                  </div>
                  <p className="text-3xl font-bold">{blog.title}</p>
                  <p className='text-xl'>{blog.fullContent}</p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <img
                      src={blog.authorImage}
                      alt=""
                      className="avatar rounded-circle"
                    />
                    <span className="author">{blog.author}</span>
                  </div>
                  <div className="post-date">
                    <span className="bi bi-clock" /> {blog.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;