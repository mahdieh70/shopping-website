import React from "react";

//assets
import about from "../../assets/aboutt.jpg";

//style
import "./about.css";

const About = () => {
  return (
    <div className="wrapper">
      <div className="ourStoryBanner">
        <h1>About Us</h1>
      </div>
      <div className="ourStoryContainer">
        <img src={about} alt="pic" />
        <div className="ourStory">
          <h2>our story</h2>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur. 
          </p>
        </div>
      </div>
      <div className="advantagesContainer">
        <div className="delivery">
          <h2>Fast Delivery</h2>
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="shiping">
          <h2>Free Shiping</h2>
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="quality">
          <h2>Best Quality</h2>
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
