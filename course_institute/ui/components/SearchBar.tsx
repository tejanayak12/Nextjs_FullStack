'use client';
import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";

function debounce(callback : () => void , delay : number = 500){
    let timer : any;
    return () => {
        clearTimeout(timer)
        setTimeout(() => {
            callback()
        } , delay);
    }
} 

// const fn = debounce(() => {} , 1000);
// fn(); -> () => {}

export default function SearchBar({searchCallback} : any) {
    const [searchText , setSearchText] = useState('');
    const getCourse = () => {
        const API_URl = `api/courses?query=${searchText}`
        console.log('Search Value Changed ::' , searchText);
        fetch(API_URl)
        .then(res => res.json())
        .then(console.log)
    }
    const searchCourses = debounce(getCourse , 500);

    useEffect(() => {
        searchCourses();
    },[searchText]);

   

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
                </div>

            </div>
        
        </>
    )
}
