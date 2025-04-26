import React from 'react'
import Courses from '@/shared/components/Courses';
import { data } from '@/shared/dummyData/courses';

export default function CoursesLayout() {
    return <Courses data={data} />
}
