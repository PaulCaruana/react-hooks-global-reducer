import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';


const UserAddForm = ({createUser, onCancel}) => {
    const initialFormState = {id: null, name: '', username: ''}
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }



    return (
        <Box display="flex" css={{paddingTop: 8, paddingLeft: 16, paddingRight: 16,}} flexDirection="column" bgcolor="background.paper" component={Paper}>
            <Box p={1} flexGrow={1}>
                <h3>Add user</h3>
            </Box>
            <form
                onSubmit={event => {
                    event.preventDefault()
                    if (user.name && user.username) {
                        const payload = {data: user};
                        createUser(payload)
                        setUser(initialFormState)
                    }
                }}
            >
                <TextField
                    id="outlined-email-input-required"
                    label="Name"
                    fullWidth
                    autoFocus={true}
                    name="name"
                    margin="normal"
                    onChange={handleInputChange}
                    value={user.name}
                />
                <TextField
                    id="outlined-email-input-required"
                    label="User name"
                    fullWidth
                    name="username"
                    margin="normal"
                    onChange={handleInputChange}
                    value={user.username}
                />
                <Box display="flex" alignItems="center" css={{height: 100}}>
                    <Box p={1}>
                        <Button variant="contained" color="primary" type="submit">Save</Button>
                        <Button color="default" onClick={onCancel}>Cancel</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default UserAddForm