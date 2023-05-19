import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Info() {
    return (
        <div className="justify-center border-2 border-red-300 leading-3">
            <div className="text-center m-5 leading-3">
                <h1 className="mb-4">Welcome to my sandboxing app!</h1>
                <h4 className="mb-4">
                    This is a test of the emergency broadcast system
                </h4>
                <h4 className="m-8 p-8">
                    Here I will be doing testing of various React components and features so I can improve my skills.
                </h4>
            </div>
        </div>
    )
};

export default Info;