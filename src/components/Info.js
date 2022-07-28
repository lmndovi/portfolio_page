import React from "react";
import Nav from "./Nav";
import "./Info.css";

const Info = () => {
  return (
    <div className="Info">
      <div>
        <Nav />
      </div>
      <div>
        <p className="Info-p">I turn dreams into digital products</p>
      </div>
      <div>
        <img
          className="Info-img"
          src="https://drive.google.com/uc?export=download&id=1fJqTjiNC8l9g3EsSYFYEJX2NJI-QrYwq"
          alt="Lu Ndovi"
        />
      </div>
      <div className="Info-text">
        <h2 className="Info-h2">About</h2>
        <p className="Info-p2">
          Hey, my name is Lu. I’m a multi-talented individual with an
          unrelenting thirst for learning.
        </p>
        <p className="Info-p3">
          Having always admired renaissance men and their varied skill sets, I
          place a lot of value in being competent across a wide range of
          disciplines. Depending on the day you can call me a developer, a
          copywriter, a product designer or a consultant. My personality (INTJ)
          makes it easier for me to break down problems into smaller logical
          steps in order to find solutions. Being naturally positive, calm and
          empathetic helps immensely when it comes to collaboration and in my
          mind makes me the ultimate team player (see sporting background).
        </p>
        <p className="Info-p3">
          Aside from work I’ve been described as a semi-professional athlete,
          social salsa dancer, everyday meditator, occasional yogi and lifetime
          learner/explorer. All of these things relate back to my working life
          as I am a firm believer in continual growth and constantly try to push
          myself out of my comfort (which can be extremely difficult as a
          natural introvert). A burning desire of mine is to create a long
          lasting, sustainable positive impact on the world but as well as my
          local community (north London) and back in Zambia where my family hail
          from. Particularly I’d love to focus on the youth and the vulnerable,
          who are all too often forgotten about.
        </p>
        <p className="Info-p3">
          Currently I am working remotely with select clients but I am always
          open to new opportunities that may present themselves. Below I have
          attached my CV with more information on my education, experience,
          skills and more: CV LINK: Click Here
          (https://docs.google.com/document/d/1Vux-BkEdgev_z_5fb3OzWShJ8d_VvOLAzR9l-spU2fs/edit?usp=sharing)
        </p>
      </div>
    </div>
  );
};

export default Info;
