import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchContacts } from '../../../../actions/contactActions';
import { Box, Grid, Paper, Typography } from '@mui/material';

class Contacts extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        const contactItems = this.props.contacts.map(contact => (
            <Box
                key={contact.id}
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
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" class="img-fluid" alt="..."></img>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{ fontSize: 14, color: 'inherit', fontWeight: 600 }} gutterBottom>
                            {contact.username}
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'inherit' }} gutterBottom>
                            {contact.email}
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'inherit' }} gutterBottom>
                            {contact.phone}
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
        ));
        return (
            <div>
                <Typography sx={{ fontSize: 22, color: 'inherit', fontWeight: 600 }}>
                    Contacts
                </Typography>
                {contactItems}
            </div>
        )
    }
}

Contacts.propTypes = {
    fetchContacts: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    contacts: state.contacts.items
});

export default connect(mapStateToProps, { fetchContacts })(Contacts);