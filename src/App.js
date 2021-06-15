import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import questions from './data';
import Question from './Question';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
 root: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100%'
 }, 
 card: {
 display: 'flex',
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center',
 width: '70%'
 },
 header: {
 width: '35%',
 padding: '2rem'
 }
}));


 
 
function App() {
 const classes = useStyles();
 

 return (
   <div className={classes.root}>
     <Card className={classes.card}>
        <div className={classes.header}>
          <Typography align='left' variant="h4" gutterBottom>
          Questions And Answers About Login
          </Typography>
        </div>

        <div className={classes.questionsContainer}>
           {questions.map(curQues => (
             <Question question={curQues}/>
           ))}
        </div>
     </Card>
   </div>
 )
     
};

export default App;

