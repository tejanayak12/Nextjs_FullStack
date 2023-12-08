import React from "react";
import { Card,CardHeader,CardBody,Typography,CardFooter,Button  }  from '@/ui';
import { Course } from "@/types";


interface CourseCardProps {
    course : Course
}

export default function CoursesCard({ course } : CourseCardProps){
    return <Card className="mt-6">
    <CardHeader color="blue-gray" className="relative h-56">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        {course.title}
      </Typography>
      <Typography color="gray" className="mb-2">
        {course.description}
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>
}