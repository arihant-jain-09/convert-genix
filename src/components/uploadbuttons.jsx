import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));
export default function UploadButtons({type,onChange}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        className={classes.input}
        id="contained-button-file"
        multiple
        type={type}
        onChange={onChange}
      />
      <label htmlFor="contained-button-file">
        {/* <Button variant="contained" color="primary" component="span">
          Upload
        </Button> */}
        <Button
        size="large"
        variant="contained"
        color="default"
        component="span"
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      </label>
    </div>
  );
}
