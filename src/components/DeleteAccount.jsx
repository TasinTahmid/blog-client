import { useState } from "react";
import PopupConfirmation from "./PopupConfirmation";

const DeleteAccount = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => setShowPopup(!showPopup);

    return (
        <div className="mx-auto mt-8 flex  w-2/3 h-2/3 bg-gray-50  shadow-xl">
            <div className="mt-12 px-14  ">
                <h2 className="py-4 text-red-600 font-semibold text-2xl border-b border-black-500">
                    Delete account
                </h2>
                <p className="py-4 text-sm mb-10">
                    Once you delete your account, there is no going back. Please
                    be certain.
                </p>
                <button
                    onClick={togglePopup}
                    className="mt-10 p-4 bg-gray-100 text-red-600  text-sm rounded-lg border border-red-200 shadow-md hover:bg-gray-50 active:bg-gray-100"
                >
                    Delete your account
                </button>
                {showPopup && <PopupConfirmation togglePopup={togglePopup} />}
            </div>
        </div>
    );
};

export default DeleteAccount;
