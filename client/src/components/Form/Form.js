import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import{ useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) =>{
    const [postData, setPostData] = useState({ticker: '', average: '', shares: ''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        }

        dispatch(createPost(postData));
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant = "h6">Add a Stock</Typography>
                <TextField 
                    name="ticker" 
                    variant="outlined" 
                    label="Stock Ticker"
                    fullWidth value={postData.ticker} onChange={(e) => setPostData({ ...postData, ticker: e.target.value })}
                />
                <TextField 
                    name="average" 
                    variant="outlined" 
                    label="Average Price"
                    fullWidth value={postData.average} onChange={(e) => setPostData({ ...postData, average: e.target.value })}
                />
                <TextField 
                    name="shares" 
                    variant="outlined" 
                    label="Number of Shares"
                    fullWidth value={postData.shares} onChange={(e) => setPostData({ ...postData, shares: e.target.value })}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="Primary" size="large" type="submit" fullWidth> 
                    Add to watchlist
                </Button>
            </form>
        </Paper>
    );
};

export default Form;