import { Button, Typography, TextField, Box } from '@mui/material'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../../../actions/postActions';

class CreatePost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      file: null
    }

    this.onChange = this.onChange.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeFile(e) {
    this.setState({ [e.target.name]: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();


    const data = new FormData();
    data.append('title', this.state.title);
    data.append('desc', this.state.desc);
    data.append('file', this.state.file);

    this.props.createPost(data);
  }

  render() {
    return (
      <Box
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
        <Typography sx={{ fontSize: 22, color: 'inherit', fontWeight: 600  }} gutterBottom>
          New Post
        </Typography>
        <TextField
          name={"title"}
          required={true}
          label={"Title"}
          fullWidth={true}
          margin="dense"
          onChange={this.onChange}
        />
        <TextField
          name={"desc"}
          required={true}
          label={"Write somthing"}
          fullWidth={true}
          margin="dense"
          onChange={this.onChange}
        />

        <div className={"d-flex justify-content-between mt-2"}>
          <input
            type="file"
            name="file"
            onChange={this.onChangeFile}
          />
          <Button
            sx={{ textTransform: "none" }}
            disabled={false}
            fullWidth={false}
            size={'large'}
            onClick={this.onSubmit}
          >
            Post
          </Button>
        </div>
      </Box>
    )
  }
}

CreatePost.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(CreatePost);