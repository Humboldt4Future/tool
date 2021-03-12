import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts.js';
import image from '../../../images/h4f.png';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={image} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">
                    {post.creator}
                </Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
                <Button size="small" style={{color: 'white'}} onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon/>
                </Button>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    Answer 1: {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Answer 2: {post.message}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    other Answers: <br/> {post.tags.map((tag) => `Answer: ${tag} `)}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Post;