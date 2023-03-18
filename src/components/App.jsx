import {useState} from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export function App (){
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
   

  const feedbacks = ['good', 'neutral', 'bad']

  function countTotalFeedback(){
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage(){
    const percentage = (good / countTotalFeedback()) * 100
    return Math.round(percentage)
  } 

  const onLeaveFeedback = e => {
    const name = e.currentTarget.name;
    switch (name){

      case 'good':
      setGood(good + 1);
      break;

      case 'neutral':
        setNeutral(neutral + 1);
      break;

      case 'bad':
        setBad(bad + 1)  
      break;
      
       default:
        return null 
    }
    }
    


    return (
    <>
  <Section title="Please leave feedback">
  <FeedbackOptions options = {feedbacks} onLeaveFeedback={onLeaveFeedback}/>
  </Section>
  
  <Section title="Statistics">
   {countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics> : <Notification message="There is no feedback"/>}
  </Section>
    </> 
    )
   
}
