import React from 'react';
import './PostDetail.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

//material-ui button handle style
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const PostDetail = (props) => {

  let history = useHistory();
  //handle button
  const handleClick = (id) => {
    history.push(`/Comment/${id}`);
  }
  const classes = useStyles();
  const { id, userId, title, body } = props.post;
  //console.log(singlePost);
  return (
    <div className="post-highlight">
      <h3>UserId:{userId}</h3>
      <p>title:{title}</p>
      <p>body:{body}</p>
      <div className={classes.root}>
        <Button onClick={() => { handleClick(id) }} variant="contained" color="primary">
          Show Details
      </Button>
      </div>
    </div>
  );
};

export default PostDetail;