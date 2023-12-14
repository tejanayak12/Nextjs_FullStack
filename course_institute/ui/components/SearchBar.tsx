'use client';
import React, { useCallback, useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";

function debounce(callback: (value: any) => void, delay: 500) {
    let timer: any;
    return (value: any) => {
        clearTimeout(timer)
        setTimeout(() => {
            callback(value)
        }, delay);
    }
}


export default function SearchBar({ search }: any) {
    const [searchText, setSearchText] = useState('');
    const [courses, setCourses] = useState([]);
    const getCourse = () => {
        const API_URl = `api/courses?query=${searchText}`
        console.log('Search Value Changed ::', searchText);
        fetch(API_URl)
            .then(res => res.json())
            .then(console.log)
    }

    const debounceAPI = useCallback(debounce(async (text: any) => {
        console.log(":: Debounce API ::", text);
        const data = await search(text);
        setCourses(data);
    }, 500), [])

    useEffect(() => {

        console.log(":: useEffect :: ", searchText);
        debounceAPI(searchText);
    }, [searchText])



    return (
        <>
            <div className="input-group">
                <h1>
                    Search The Course U Want To Look For...
                </h1>
                <div>
                    <Input
                        crossOrigin={true}
                        value={searchText}
                        type="text"
                        className="input"
                        placeholder="Search"
                        onChange={e => setSearchText(e.target.value)}
                    />
                    <pre>Search Word : {searchText}</pre>
                    {courses.map((course: any) => <li key={course.id}>{course.title}</li>)}
                </div>

            </div>

        </>
    )
}
