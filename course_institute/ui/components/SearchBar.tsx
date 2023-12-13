'use client';
import React, { useCallback, useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";

function debounce(callback : (value : any) => void , delay : 500){
    let timer : any;
    return (value : any) => {
        clearTimeout(timer)
        setTimeout(() => {
            callback(value)
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
    
    const debounceAPI = useCallback( debounce((text : any ) => {
        console.log(":: Debounce API ::" , text)
    },500),[]   )

    useEffect(() => {
        // console.log(":: USE EFFECT ::searchText" , searchText);
        // let timer = setTimeout(getCourse,500);
        // return () => {
        // console.log(":: USE EFFECT ::searchText In Return" , searchText);
        // clearTimeout(timer)
        // }
        console.log(":: useEffect :: " , searchText);
        debounceAPI(searchText);
    },[searchText])

   

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
