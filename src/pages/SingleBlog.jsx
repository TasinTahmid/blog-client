import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";

const SingleBlog = () => {
    const { id } = useParams();
    console.log(id);

    const [blog, setBlog] = useState({});
    const [time, setTime] = useState("");
    const [text, setText] = useState("");
    useEffect(() => {
        const fetchBlog = async () => {
            const response = await axios.get(
                `http://localhost:5000/api/v1/blogs/${id}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            setBlog(response.data);
            setTime(response.data.createdAt.split("T")[0]);
            console.log(response.data.createdAt.split("T")[0]);
        };
        fetchBlog();
    }, []);
    return (
        <div className=" h-full">
            <Nav />
            <div className="h-full w-full overflow-hidden hover:overflow-auto bg-white rounded-b-lg mt-2 shadow-lg p-8 ">
                <h2 className="text-6xl mb-8 font-semibold">{blog.title}</h2>
                <p className="my-6">{time}</p>

                <p className="my-6 inline">{blog.blogContent}</p>
            </div>
        </div>
    );
};

export default SingleBlog;
