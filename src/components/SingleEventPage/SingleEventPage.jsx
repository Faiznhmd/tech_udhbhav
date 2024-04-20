import React from 'react';
import classes from './SingleEventPage.module.css';
// import sample from "../../assets/Events/sample.jpeg";
import Button from '../common/Button/Button';
import { useParams } from 'react-router-dom';
import { eventsData } from '../../assets/eventsData';

const SingleEventPage = () => {
  const { eventId } = useParams();
  console.log(eventId);

  const requiredEvent = eventsData.find((event) => event.id === +eventId);
  const { name, image, description, RuleBook, Googleform, onSpot } =
    requiredEvent;

  return (
    <>
      <div className={classes.singleEvent}>
        <div className={classes.singleEventCard}>
          <div className={classes.col1}>
            <img className={classes.eventPoster} src={image} alt="eventName" />
          </div>
          <div className={classes.col2}>
            <h1 className={classes.eventHeading}>{name}</h1>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Description</h2>
              <p className={classes.content}>{description}</p>
            </div>

            {Googleform !== '' ? (
              <Button hrefLink={Googleform} label="Register" />
            ) : onSpot !== '' ? (
              <p className={classes.soon}>
                Registration will be taken on spot!{' '}
              </p>
            ) : (
              <>
                <Button hrefLink={RuleBook} label="RuleBook" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;
