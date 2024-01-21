import React from 'react';
import { Card, CardBody, Col, } from 'reactstrap';
import { Button, InputAdornment, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = (data) => {
    console.log(data);
    sessionStorage.setItem("isLoagged",true)
    window.location.href='/dashboard'
  }

  return (
    <div className='login-form'>

      <Col md={4}>
        <Card>
          <CardBody>

            <h2 className='title'>Sign-in to continue.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "E-mail is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-4"
                    label="E-mail"
                    error={errors.email}
                    helperText={errors.email?.message}
                    fullWidth
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-4"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    error={errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" onClick={handleClickShowPassword}>
                          <Button variant='primary'>
                           {showPassword ? <VisibilityOff /> : <Visibility />}
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                )}
              />

              <div className='text-center'>
                <Button variant='contained' type='submit'>Submit</Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>

    </div>
  )
}

export default Login;