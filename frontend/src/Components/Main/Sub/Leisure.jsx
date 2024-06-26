import React from 'react'
import { NavLink } from 'react-router-dom'
const Leisure = () => {
  return (
    <div>
    <div className="flex flex-col px-[3rem] bg-#F5F5F5 h-auto">
    <h1 className="text-5xl font-semibold w-full text-center py-[3rem]">
      Leisure
    </h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
    <div className="w-full">
      <NavLink to="https://www.thrillophilia.com/">
            <div className="service-box shadow-md">
              <div className='img-dimensions'>
                <img src="/img/travel1.jpg " alt="" />
              </div>
              <div className="service-content">
                <h2 className="s-title">Solo Trips</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni adipisci eaque autem fugiat! Quia, provident vitae!
                  Magni tempora perferendis eum non provident.
                </p>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="w-full">
      <NavLink to="https://www.goibibo.com/flights/?utm_source=google&utm_medium=cpc&utm_campaign=DF-Brand-EM&utm_adgroup=Only%20Goibibo&utm_term=!SEM!DF!G!Brand!RSA!108599293!6504095653!617695092667!e!goibibo!c!&gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxf8RP1goid3HGbcgbv_GqFQ6wjJM6JXc4zb4PsvZGmru73nnto2U7RoCmF8QAvD_BwE">
            <div className="service-box shadow-md">
              <div className='img-dimensions'>
                <img src="/img/travel2.jpg " alt="" />
              </div>
              <div className="service-content">
                <h2 className="s-title">Trips with girls</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni adipisci eaque autem fugiat! Quia, provident vitae!
                  Magni tempora perferendis eum non provident.
                </p>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="w-full">
      <NavLink to="https://www.makemytrip.com/">
            <div className="service-box shadow-md">
              <div className='img-dimensions'>
                <img src="/img/travel3.jpg " alt="" />
              </div>
              <div className="service-content">
                <h2 className="s-title">Thailand Trip</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni adipisci eaque autem fugiat! Quia, provident vitae!
                  Magni tempora perferendis eum non provident.
                </p>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="w-full">
      <NavLink to="https://upflairs.com/courses/full-stack-web-development-in-jaipur/">
            <div className="service-box shadow-md">
              <div className='img-dimensions'>
                <img src="/img/travel4.jpg " alt="" />
              </div>
              <div className="service-content">
                <h2 className="s-title">Bon voyage</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni adipisci eaque autem fugiat! Quia, provident vitae!
                  Magni tempora perferendis eum non provident.
                </p>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="w-full">
      <NavLink to="https://upflairs.com/courses/full-stack-web-development-in-jaipur/">
            <div className="service-box shadow-md">
              <div className='img-dimensions'>
                <img src="/img/travel5.jpg " alt="" />
              </div>
              <div className="service-content">
                <h2 className="s-title">HAve A vacation</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni adipisci eaque autem fugiat! Quia, provident vitae!
                  Magni tempora perferendis eum non provident.
                </p>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="w-full">
      <NavLink to="https://upflairs.com/courses/full-stack-web-development-in-jaipur/">
            <div className="service-box shadow-md">
              <div className='img-dimensions'>
                <img src="/img/travel6.jpg " alt="" />
              </div>
              <div className="service-content">
                <h2 className="s-title">Dream destinations</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni adipisci eaque autem fugiat! Quia, provident vitae!
                  Magni tempora perferendis eum non provident.
                </p>
              </div>
            </div>
            </NavLink>
          </div>
    </div>
  </div>
  </div>
  )
}

export default Leisure
