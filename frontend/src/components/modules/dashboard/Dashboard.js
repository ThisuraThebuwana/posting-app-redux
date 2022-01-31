import { Box, Grid, Typography } from '@mui/material';
import React, { Component } from 'react'
import Contacts from './includes/Contacts'
import CreatePost from './includes/CreatePost';
import PicsmPosts from './includes/PicsmPosts';
import Post from './includes/Post';

class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Contacts />
                    </div>
                    <div className='col p-0 midSection'>
                        <div className='col'>
                            <div className='row' style={{display:'flex'}}>
                                <CreatePost/>
                            </div>
                            <div className='row'>
                                <Post/>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <PicsmPosts/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;