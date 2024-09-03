import React, { useState } from "react";

const LanguageButton = () => {
    const [lang, setLang] = useState('en');

    return (
        <div class="inline-flex">
            <button onClick={() => setNavbarOpen('en')} className=" bg-transparent hover:bg-gray-400 text-gray-300 font-bold py-2 px-4 rounded-l">
                EN
            </button>
            <button onClick={() => setNavbarOpen('jp')} className="bg-transparent hover:bg-gray-400 text-gray-2300 font-bold py-2 px-4 rounded-r">
                JP
            </button>
        </div>
    );
};

export default LanguageButton;