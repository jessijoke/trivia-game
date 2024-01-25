"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function page() {
    const router = useRouter();

    // const APIUrl = `https://opentdb.com/api.php?amount=10&category=${category}${difficulty !== null ? `&difficulty=${difficulty}` : ''}&type=multiple`;
    // useEffect(() => {
    //     fetch(APIUrl)
    //       .then(response => response.json())
    //     //   .then(data => setCategoryList(data))
    //       .then(data => console.log(data))
    //       .catch(error => console.log(error));
    //   }, []);

    return (
        <div>
            <h1>Quiz</h1>
        </div>
    );
}

export default page;
