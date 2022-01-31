import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPicsumPosts } from '../../../../actions/picsumPostActions';
import { Box, Paper, Typography } from '@mui/material';

class PicsmPosts extends Component {
    componentDidMount() {
        this.props.fetchPicsumPosts();
    }

    render() {
        const postItems = this.props.picsumPosts.map(post => (
            <Paper
                key={post.id}
                sx={{
                    my: 1,
                }}
            >
                <img src={post.download_url} class="img-fluid" alt="..." style={{ borderRadius: 5 }}></img>
            </Paper>
        ));
        return (
            <div>
                <Typography sx={{ fontSize: 22, color: 'inherit', fontWeight: 600 }}>
                    Picsum Posts
                </Typography>
                {postItems}
            </div>
        )
    }
}

PicsmPosts.propTypes = {
    fetchPicsumPosts: PropTypes.func.isRequired,
    picsumPosts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    picsumPosts: state.picsumPosts.items
});

export default connect(mapStateToProps, { fetchPicsumPosts })(PicsmPosts);