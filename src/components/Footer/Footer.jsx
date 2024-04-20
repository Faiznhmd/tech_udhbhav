import React from 'react';
// import sambhavLogo from '../../assets/Logo.png';
// import grabbitslogo from '../../assets/grabbits.png';
import classes from './Footer.module.css';

// const sambhavinsta = 'https://www.instagram.com/sambhav_dypcoe/';
// const sambhavlinkedin = 'https://www.linkedin.com/company/sambhav-tech-fest/';
// const sambhavitwitter=''

// const grabbitinsta = 'https://www.instagram.com/grabbits_/';
// const grabbitlinkedin = 'https://www.linkedin.com/company/grabbits/';
// const grabbittwitter = 'https://twitter.com/grabbits_';
// const grabbitwebsite = 'https://grabbits.vercel.app/';

// const spiderurl = 'https://www.linkedin.com/in/om-gawande/';
// const saurabh = 'https://www.linkedin.com/in/saurabh-barde-5b617321a/';

// const grabbiturl = 'https://www.grabbitdypcoe.in';
const faizan = 'https://www.linkedin.com/in/faizan-ahmad-473aa123b/';
const adarsh = 'https://www.linkedin.com/in/adarsh-kumar-abb0a3259/';
const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Website designed and created by{' '}
          <a
            href={faizan}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            @Faizan Ahmad
          </a>{' '}
          ,{' '}
          <a
            href={adarsh}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {' '}
            @Adarsh Kumar
          </a>{' '}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
