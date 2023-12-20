const Form = () => {
    const register = (event) => {
        event.preventDefault();
        const username = "user55";
        const email = "user55@emai.com";
        const password = "user55";
        const reqobj = {
            username,
            email,
            password,
        };
        fetch("http://localhost:5000/api/v1/blogs", {
            method: "POST",
            body: JSON.stringify(reqobj),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3NWJlOWI1LWZiZTAtNGM5Zi05OWYwLWI0NGQyZmVhMTI1YSIsImlhdCI6MTcwMzA2ODQ5OX0.AMn4CqIAhRIkCmX8ktnKqdCnn9WG4qDEMB-mnIfmvYw",
            },
        })
            .then((response) => response.json())

            .then((json) => console.log(json));
    };

    return (
        <form className="mt-10 w-1/2">
            <div className="space-y-12">
                <div className=" border-b border-gray-900/10 pb-12">
                    <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-35 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="username"
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-x-6">
                <div>
                    <button
                        type="button"
                        className="rounded-md px-4 py-2 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-2"
                    >
                        Already have an account? Login.
                    </button>
                </div>
                <div className="flex items-center justify-between gap-x-6">
                    <button
                        type="button"
                        className="rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-400"
                        onClick={register}
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
