import './syle.css'
import image1 from './assets/images/image1.jpg'
import image2 from './assets/images/image2.png'
import image3 from './assets/images/image3.png'
import image4 from './assets/images/image4.png'
import image5 from './assets/images/image5.png'
import image6 from './assets/images/image6.png'
import image7 from './assets/images/image7.jpeg'
import image8 from './assets/images/image8.png'
import image9 from './assets/images/image9.png'
import image10 from './assets/images/image10.png'
import image11 from './assets/images/image11.png'
import image12 from './assets/images/image12.png'
import image13 from './assets/images/image13.png'
import image14 from './assets/images/image14.png'
import image15 from './assets/images/image15.png'
import image16 from './assets/images/image16.png'
import image17 from './assets/images/image17.png'

function App() {
  return (
    <>
      <div id="header">
        <div class="logo">
          <img src={image1} alt=""/>
        </div>
        <div class="badabox">
          <div class="chotubox"><b>PARKS</b></div>
          <div class="chotubox"><b>CRUISE</b></div>
          <div class="chotubox"><b>WHAT'S NEW</b></div>
        </div>
      </div>
      <div id="page1">
        <img src={image2} alt=""/>
      </div>
      <div id="page2">
        <div class="images1"><img src={image3} alt=""/></div>
        <div class="images1"><img src={image4} alt=""/></div>
        <div class="images1"><img src={image5} alt=""/></div>
        <div class="images1"><img src={image6} alt=""/></div>
      </div>
      <div id="page3">
        <div class="x1"><p>Featured Ads</p></div>
        <div class="page3lite">
          <div class="boxx1">
            <img src={image7} alt=""/>
              <p>
                Disney Imagine That | Disney Channel
              </p>
          </div>
          <div class="boxx2">
            <img src={image8} alt=""/>
              <p>
                Marvel's Spider-Man
              </p>
              <p class="p2">When new foes threaten the city,a new web-slinger arises as Spider-Man.Marvel's Spider-Man: Miles Morales has arrived on playstation 4 and Playstation 5.Get the game now:https://amzn.to/35buWpS</p>
          </div>
        </div>
      </div>
      <div id="page4">
        <div class="x2"><p>Explore Disney Holidays</p></div>
        <div class="boxx3">
          <div class="image3">
            <img src={image9} alt=""/>
              <p>Legends Of the Force</p>
              <p><b>DISCOVER NOW AT DISNEYLAND® PARIS</b></p>
          </div>
          <div class="image3">
            <img src={image10} alt=""/>
              <p>14 Day Ticket at a 7 Day Price</p>
              <p><b>BOOK WITH WALT DISNEY WORLD</b></p>
          </div>
          <div class="image3">
            <img src={image11} alt=""/>
              <p>Find Your Perfect Holiday</p>
              <p><b>BOOK WITH DISNEY CRUISE LINE</b></p>
          </div>
        </div>
      </div>
      <div id="page5">
        <div class="x3"><p>More From Disney</p></div>
        <div class="page5box">
          <div class="boxx4">
            <img src={image12} alt=""/>
              <p>Disney Junior Birthday Book</p>
          </div>
          <div class="boxx5">
            <img src={image13} alt=""/>
              <p>Happy Anniversary Mickey</p>
          </div>
        </div>
      </div>
      <div id="page6">
        <div class="page6box">
          <div class="footer1">
            <img src={image1} alt=""/>
              <a href="">PARKS</a>
              <a href="">CRUISE</a>
              <a href="">WHAT'S NEW</a>
          </div>
          <div class="footer2">
            <img src={image14} alt=""/>
              <img src={image15} alt=""/>
                <img src={image16} alt=""/>
                  <img src={image16} alt=""/>
                  </div>
                </div>
                <div class="disneylogo">
                  <img src={image17} alt=""/>
                </div>
                <div class="page6box2">
                  <div class="xyz">
                    <h5>about</h5>
                    <h5>Carrers</h5>
                    <h5>Internet Safety</h5>
                    <h5>Terms of Use</h5>
                    <h5>Privacy Policy</h5>
                    <h5>DMCA Notices</h5>
                    <h5>Supplemental Terms of Use</h5>
                    <h5>Addendum to Privacy Policy - for India</h5>
                    <h5>Contest Terms and Conditions</h5>
                    <h5>Channel Distribution</h5>
                  </div>
                  <div class="xyz3">
                    <h5>Interested-Based Ads</h5>
                  </div>
                  <div class="xyz2">
                    <h4>© Disney © Disney•Pixar © & ™ Lucasfilm LTD © Marvel. All Rights Reserved</h4>
                  </div>
                </div>

              </div>
            </>
            )
}

            export default App
