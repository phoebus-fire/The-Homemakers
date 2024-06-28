import React from 'react';
import { NavLink } from 'react-router-dom';
import BlogsData from './BlogsData.json';

const Blogs = () => {

  const maxContentText = 100;
  
  return (
    <>
      <section id="blog" className="blog-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Blog</h3>
                <p className="subtitle-a">
                Homemakers who think for themselves build stronger, more fulfilling lives. Read some famous blogs.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            {BlogsData.map((blog) => (
              <div className="col-lg-4" key={blog.id}>
                <div className="card card-blog">
                  <div className="card-img">
                    <NavLink to={`/blog/${blog.id}`}>
                      <img src={blog.image} alt="" className="img-fluid h-[300px] w-full object-cover object-top" />
                    </NavLink>
                  </div>
                  <div className="card-body">
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">{blog.category}</h6>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <NavLink to={`/blog/${blog.id}`}>{blog.title}</NavLink>
                    </h3>
                    <p className="card-description">{blog.content.length > maxContentText ? `${blog.content.slice(0, maxContentText)}...` : blog.content}</p>
                  </div>
                  <div className="card-footer">
                    <div className="post-author">
                      <a href="#">
                        <img
                          src={blog.authorImage}
                          alt=""
                          className="avatar rounded-circle"
                        />
                        <span className="author">{blog.author}</span>
                      </a>
                    </div>
                    <div className="post-date">
                      <span className="bi bi-clock" /> {blog.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
