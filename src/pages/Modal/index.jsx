import { CancelOutlined } from '@mui/icons-material';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: "16px",
    boxShadow: 24,
    p: 4,
};

export const CustomModal = ({ open, handleOpen, fetchUser }) => {

    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // axios.post("https://crudcrud.com/",data).then((response) => {
        //     console.log(response)
        //     reset();
        //     handleOpen();fetchUser();
        // })
    }

    return (
        <Modal
            open={open}
            onClose={handleOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='d-flex justify-content-between align-items-start'>
                    <h4>Add User</h4>
                    <Button variant='primary' onClick={handleOpen}>
                        <CancelOutlined />
                    </Button>
                </div>
                <Typography component="small" className='text-muted'>
                    Enter user details.
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="username"
                        control={control}
                        rules={{
                            required: "Username is required",
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                className="my-2"
                                label="User Name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={errors.username}
                                helperText={errors.username?.message}
                                fullWidth
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: "E-mail is required",
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                className="my-2"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={errors.email}
                                helperText={errors.email?.message}
                                fullWidth
                            />
                        )}
                    />

                    <Controller
                        name="contact"
                        control={control}
                        rules={{
                            required: "Password is required",
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                className="my-2"
                                label="Contact"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={errors.contact}
                                helperText={errors.contact?.message}
                                fullWidth
                            />
                        )}
                    />

                    <div className='text-center'>
                        <Button variant='contained' type='submit'>Submit</Button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}