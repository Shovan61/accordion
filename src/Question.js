import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import RemoveIcon from '@material-ui/icons/Remove';
import questions from './data';


const useStyles = makeStyles ((theme) => ({
card: {
padding: '1rem',
width: '90%',
marginTop: '2rem',
marginBottom: '2rem',
boxShadow: '3px 2px 8px -3px rgba(0,0,0,0.75)',

},
quesIcon: {
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
},
content: {
width: '90%',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'
}
}));


function Question({question}) {
const classes = useStyles();
const [isShowContent, setisShowContent] = useState(false);

const handleShowContent = () => {
setisShowContent(!isShowContent);
};

return (
    <Card className={classes.card}>
        <div className={classes.quesIcon}>
        <Typography style={{fontSize: '19px'}} variant="h6" gutterBottom>
           {question.title}
        </Typography>

        <Avatar 
        style={{backgroundColor: '#e8eaf6', cursor: 'pointer'}}
        onClick={handleShowContent}
        >  

             {isShowContent ? (
                 <RemoveIcon style={{color: '#ec407a'}}/>
             ) : (
                <AddIcon style={{color: '#ec407a'}}/>
             )}
            
        </Avatar>
        </div>
         
         {isShowContent && (
            <div className={classes.content}>
                <Typography variant="caption" color='textSecondary' gutterBottom>
                    {question.info}
                </Typography>
            </div> 
         )}

    </Card>
)
};

export default Question;
