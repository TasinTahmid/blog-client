import { useState } from "react";
import BlogContainer from "../components/BlogContainer";

const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="auto">
            <BlogContainer />
        </div>
    );
};

export default Home;
