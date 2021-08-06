import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => (
    <TextField
      name={name}
      onChange={handleChange}
      variant="standard"
      required
      fullWidth
      label={label}
      // autoFocus={autoFocus}
      type={type}
    />
);

export default Input;
