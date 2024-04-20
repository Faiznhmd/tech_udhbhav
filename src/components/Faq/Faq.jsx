import { useState } from 'react';
import classes from './Faq.module.css';

const questions = [
  {
    question: 'What is Tech Udhbhav 2K24?',
    answer:
      'Tech Udbhav 2k24  is  one of the  biggest Technical event in BIT Sindri.',
  },

  {
    question: 'How can I participate in the event?',
    answer:
      'Explore various events on the Tech Udhbhav website and register for the same',
  },
  {
    question: 'Is there any entry fee for Tech Udbhav 2k24?',
    answer: 'No, there is not any entry fee to explore Tech Udbhav 2k24 .',
  },
  {
    question: 'Will I get participation certificate ?',
    answer: 'Yes you will be provided with digital certificate.',
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
