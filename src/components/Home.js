import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home () {
    return (
        <div className="bg-white">
            <h1 className="justify-center text-7xl text-center text-purple-900 border-blue-500 p-8 font-bold">
                Adam's Sandboxing App
            </h1>
            <div className="justify-center text-center text-purple-400 border-red-500 mt-10">
                I will be implementing a person directory list here
            </div>
        </div>
    );
}

export default Home;