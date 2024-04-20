// import Button from "../common/Button/Button";
import classes from './About.module.css';
import about from './about.svg';

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>Tech Udbhav 24</h2>
            <p className={classes.para}>
              Tech Udbhav 2024, the flagship technical fest presented by the
              IETE Students' Forum, is on the horizon! Get ready to immerse
              yourself in a world where creativity knows no bounds and
              innovation takes center stage. Tech Udbhav is more than just a
              fest; it's an experience that will leave you inspired and
              awestruck. Stay tuned as we reveal more about our lineup of
              events, attractions and surprises in store.
            </p>

            {/* <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            from advanced robotics challenges to entrepreneurship hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, and a
            titanic prize money sum of above half a million rupees to make Karma
            one of the most unique tech carnivals of the country.
          </p> */}
            {/* <div className={classes.btn}>
            <Button label="Explore" />
          </div> */}
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
