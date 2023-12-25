import Form from "../components/Form";
import Nav from "../components/Nav";

const Auth = () => {
    return (
        <div className="flex flex-col h-screen">
            <Nav />
            <div className="flex-1">
                <Form />
            </div>
        </div>
    );
};

export default Auth;
