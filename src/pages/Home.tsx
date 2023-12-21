
import React, { useState, useEffect, FC } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, } from "react-router-dom";


export const home: symbol = Symbol("home");
export const Home: FC<{ pageMode: symbol }> = (props) => {
  const navigate = useNavigate();
  useEffect(() => { navigate(props.pageMode.toString()) }, [props.pageMode]);
  return (
    <>
      <h1>matsh</h1>
    </>
  );
};