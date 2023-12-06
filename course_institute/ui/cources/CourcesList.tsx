import React from "react";
import CourcesCard from './CourcesCard';
import { Course } from '@/types'

interface CourseListProps {
    list : Course[]
}

export default function CoursesList({ list = [] } : CourseListProps){
    return <div className="grid grid-cols-3 gap-2">
        {/* <CourcesCard course={{id : 1, title: 'React JS'}} />
        <CourcesCard course={{id : 1, title: 'React JS'}} />
        <CourcesCard course={{id : 1, title: 'React JS'}} /> */}

        { list.map(course => <CourcesCard key={course.id} course={course}/>) }
    </div>
}