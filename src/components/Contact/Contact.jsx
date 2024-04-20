import Faq from '../Faq/Faq';
import classes from './Contact.module.css';
import mainPoster from '../../assets/assets/hero-bannerr.jpeg';

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>
          <Faq />

          <div className={classes.mapBox}>
            <img src={mainPoster} alt="" className="classes.map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
