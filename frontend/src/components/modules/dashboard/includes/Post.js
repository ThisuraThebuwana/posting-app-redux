import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPosts, deletePost, likePost, dislikePost } from '../../../../actions/postActions';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.onClickLike = this.onClickLike.bind(this);
        this.onClickDislike = this.onClickDislike.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    onClickLike(e, id, likes) {
        e.preventDefault();

        this.props.likePost(id, likes+1);
    }

    onClickDislike(e, id, dislikes) {
        e.preventDefault();
        this.props.dislikePost(id, dislikes+1);
    }

    onClickRemove(e, id) {
        e.preventDefault();
        this.props.deletePost(id);
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <Box
                key={post._id}
                sx={{
                    flexGrow: 1,
                    my: 1,
                    p: 1,
                    bgcolor: '#fff',
                    color: (theme) => 'grey.800',
                    border: '1px solid',
                    borderColor: 'grey.300',
                    borderRadius: 2,
                }}
            >
                <Paper variant="outlined">
                    <img src={require(`../../../images/uploads/${post.filename}`)} width={'100%'} alt="..." />
                </Paper>
                <Typography sx={{ fontSize: 14, color: '#0b0b0b', fontWeight: 600 }} gutterBottom>
                    {post.title}
                </Typography>
                <Typography sx={{ fontSize: 14, color: '#0b0b0b' }} gutterBottom>
                    {post.desc}
                </Typography>
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <Button
                            name='sss'
                            sx={{ textTransform: "none", justifyContent: 'center', alignContent: 'center' }}
                            disabled={false}
                            fullWidth={false}
                            size={'large'}
                            onClick={e => this.onClickRemove(e, post._id)}
                        >
                            <DeleteForeverIcon />Remove
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'Center'
                            }}
                        >
                            <Button
                                sx={{ textTransform: "none", justifyContent: 'center', alignContent: 'center' }}
                                disabled={false}
                                fullWidth={false}
                                size={'large'}
                                onClick={e => this.onClickLike(e, post._id, post.likes)}
                            >
                                <ThumbUpIcon />
                            </Button>
                            <Typography sx={{ fontSize: 14, color: '#0b0b0b' }} gutterBottom>
                                {post.likes} likes
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'Center'
                            }}
                        >
                            <Button
                                sx={{ textTransform: "none", justifyContent: 'center', alignContent: 'center' }}
                                disabled={false}
                                fullWidth={false}
                                size={'large'}
                                onClick={e => this.onClickDislike(e, post._id, post.dislikes)}
                            >
                                <ThumbDownIcon />
                            </Button>
                            <Typography sx={{ fontSize: 14, color: '#0b0b0b' }} gutterBottom>
                                {post.dislikes} dislikes
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        ));
        return (
            <div>
                <Typography sx={{ fontSize: 22, color: 'inherit', fontWeight: 600 }}>
                    My Posts
                </Typography>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    likePost: PropTypes.func.isRequired,
    dislikePost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, deletePost, likePost, dislikePost })(Posts);