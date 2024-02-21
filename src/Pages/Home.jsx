import React, { useState } from 'react';

const Home = () => {
    const [responseData, setResponseData] = useState(null);

    const fetchData = async () => {
        try {
            const Api = "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";
            const resp = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${Api}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "user",
                            content: "Hello!"
                        }
                    ]
                })
            });
            const data = await resp.json();
            setResponseData(data); // Update state with response data
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // This function will trigger the fetch operation
    const handleFetchClick = () => {
        // Check if there's no ongoing request before making a new one
        if (!responseData) {
            fetchData();
        } else {
            console.log('A request is already in progress.');
        }
    };

    return (
        <>
            <div className='font-bold text-xl text-black'>Home is this</div>
            <button onClick={handleFetchClick}>Fetch Data</button>
            {responseData && (
                <div>
                    {/* Display the response data */}
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </>
    );
};

export default Home;
