import React,{useState,useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Frontend Developer</h3>
        <div className="header__bar__icons">
          <a href="https://www.instagram.com/yasharth_2104/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/></a>
          <a href="https://github.com/yasharthsGh" target='_blank'><img src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a>
          <a href="https://www.linkedin.com/in/yasharth2143/?originalSubdomain=in" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
        </div>
      </div>

      <div className="header-logo" id="heading">Sortfolio</div>
      <div className="header__options">
         <h3 className="header__option" onClick = {contactHandler}><b>Contact</b></h3>
      </div>
   </div>
  )
}

export default Header;