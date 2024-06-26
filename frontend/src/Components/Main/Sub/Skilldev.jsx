import React from 'react'
import { NavLink } from 'react-router-dom'

const skilldev = () => {
  return (
    <div>
      <div className="flex flex-col px-[3rem] bg-#F5F5F5 h-auto">
      <h1 className="text-5xl font-semibold w-full text-center py-[3rem]">
        Skill Development
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
      <div className="w-full">
        <NavLink to="https://upflairs.com/courses/full-stack-web-development-in-jaipur/">
              <div className="service-box shadow-md">
                <div className='img-dimensions'>
                  <img src="/img/webd.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Full Stack Web Development</h2>
                  <p className="s-description text-center">
                  Mern Complete, Web Development, Version Control, Web Design
                  </p>
                </div>
              </div>
              </NavLink>
            </div>
            <div className="w-full">
            <NavLink to="https://upflairs.com/courses/cloud-computing-devops-enigneering-in-jaipur/">
              <div className="service-box shadow-md">
                <div className='img-dimensions'>
                  <img src="/img/devops.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Cloud Computing & DevOps Engineering</h2>
                  <p className="s-description text-center">
                  Linux, AWS, Azure, Jenkins, Ansible and Terraform , Docker, Kubernetes
                  </p>
                </div>
              </div>
              </NavLink>
            </div>
            <div className="w-full">
            <NavLink to="https://upflairs.com/courses/machine-learning-data-science-in-jaipur/">
              <div className="service-box shadow-md">
                <div className='img-dimensions'>
                  <img src="/img/datas.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Data Science with Machine Learning and AI </h2>
                  <p className="s-description text-center">
                  Python, Databases, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing
                  </p>
                </div>
              </div>
              </NavLink>
            </div>
            <div className="w-full">
            <NavLink to="https://summers.upflairs.com/">
              <div className="service-box shadow-md">
                <div className='img-dimensions'>
                  <img src="/img/iot.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Embedded Systems & IoT</h2>
                  <p className="s-description text-center">
                  Embedded Systems, IoT, In-depth knowledge of IoT, Communication Protocols, GPIO
                  </p>
                </div>
              </div>
              </NavLink>
            </div>
            <div className="w-full">
            <NavLink to="https://www.steezy.co/">
            <div className="service-box shadow-md">
            <div className='img-dimensions'>
                  <img src="/img/dance.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Dancing</h2>
                  <p className="s-description text-center">
                  Learn Bharatanatyam, Kuchipudi, Kathak, Odissi, Sattriya, Kathakali, Manipuri, and Mohiniyattam 
                  </p>
                </div>
              </div>
              </NavLink>
            </div>
            <div className="w-full">
            <NavLink to="https://www.epicurious.com/">
              <div className="service-box shadow-md">
              <div className='img-dimensions'>
                  <img src="/img/cook.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Marketing Services</h2>
                  <p className="s-description text-center">
                  Learn cooking brand new cuisines Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              </NavLink>
            </div>
            </div>
            <p> </p>
      </div>
    </div>
  )
}


export default skilldev
