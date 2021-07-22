import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Create'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';
import FALLBACK_IMAGE from '../../../images/graph.png';

const Post = ({ post, setCurrentId }) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} 
            image = {`https://eodhistoricaldata.com/img/logos/US/${post.ticker}.png`} 
            title={post.ticker} 
            onError={e => {
                e.target.image = FALLBACK_IMAGE;
            }}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.ticker}</Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button ></Button>
            </div>
            <CardContent className = {classes.cardContent}>
                <Typography variant="h5" component="h2">
                    $40.00
                </Typography>
                <Typography variant="h5" component="h2">
                    +69.00
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="small"/>
                    EDIT
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;