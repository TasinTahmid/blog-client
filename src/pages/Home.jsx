import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
    var token = useSelector((state) => state.auth.token);
    console.log("from home....", token);
    return <div>Home</div>;
};

export default Home;
