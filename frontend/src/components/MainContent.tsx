import React from 'react';
import nat1 from '../assets/img/nat-1-large.jpg';
import nat2 from '../assets/img/nat-2-large.jpg';
import nat3 from '../assets/img/nat-3-large.jpg';
// import './MainContent.css';

const MainContent: React.FC = () => {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting adventurous Tours for everyone
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Fall in love with nature</h3>
            <p className="paragraph">
              lorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsum lorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsum
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">Enthrailing Adventures for you</h3>
            <p className="paragraph">
              lorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsum lorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsum
            </p>
            <a href="#" className="btn-txt">Let's Go&rArr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img className="composition__photo composition__photo--p1" alt="photo 1" src={nat1} />
              <img className="composition__photo composition__photo--p2" alt="photo 2" src={nat2} />
              <img className="composition__photo composition__photo--p3" alt="photo 3" src={nat3} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
