import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import DoctorImage1 from '../../../../shared/themes/assets/images/doctor_welcome1.svg';
import DoctorImage2 from '../../../../shared/themes/assets/images/doctor_welcome.svg';

const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="Landing">
      <h3>
        This is Panda Health, <br /> Welcome!
      </h3>
      <p id="Landing-friend">
        Your best friend for all your <br /> medical needs
      </p>

      <div className="Landing-doctor">
        <Slider {...settings}>
          <div>
            <img src={DoctorImage1} alt="welcome" />
            <p>Easily share your Medical Records with Specialists!</p>
          </div>

          <div>
            <img src={DoctorImage2} alt="welcome" />
            <p>Schedule your appointments with ease.</p>
          </div>
        </Slider>
      </div>

      <Link to="/auth/register" className="Landing-start btn-primary">
        Get Started
      </Link>
      <p>
        Already have an account?{' '}
        <Link to="/auth/login" className="sign-in">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Landing;
