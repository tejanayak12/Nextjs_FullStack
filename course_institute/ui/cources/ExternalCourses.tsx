'use client'

import React , {useState , useEffect, useMemo} from 'react'
import CoursesList from './CourcesList'

function ExternalCourses({getData} : any) {
    const [courses , setCources] = useState([])

    useEffect(() => {
        getData()
        .then((coursesList : any) => setCources(coursesList))
    },[])

    const listOfCourse = useMemo(() => {
        return courses.map((course : any) => {
            return {
                ...course,
                title : course.name
            }
        })
    } , [courses])

  return (
    <div>
        <h2>External Courses</h2>
        <CoursesList list={listOfCourse}/>
    </div>
    
  )
}

export default ExternalCourses