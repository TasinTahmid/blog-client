import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className=" bg-white border-y rounded-b-lg shadow-2xl w-full mb-4 pt-10 px-8 pb-4">
            <div className="md:flex md:justify-between">
                <div className="mb-4 md:mb-0 flex flex-col justify-end">
                    <span className=" text-sm text-gray-500 sm:text-center">
                        © 2023 tasintahmid. All Rights Reserved.
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:underline">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a
                                    href="https://github.com/hiteshchoudhary"
                                    className="hover:underline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <Link to="/" className="hover:underline">
                                    Discord
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline">
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-4 border-gray-200 " />
        </footer>
    );
}
