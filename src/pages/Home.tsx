
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState, useEffect, FC } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, } from "react-router-dom";
import Matsh from '../components/Matsh';
export const Home = () => {
  // const navigate = useNavigate();
  // useEffect(() => { navigate(props.pageMode.toString()) }, [props.pageMode]);
  return (
    <>
      <Box
        // marginY={3} 
        paddingY={5}>
        <Matsh />
      </Box>

    </>
  );
};

export default Home;