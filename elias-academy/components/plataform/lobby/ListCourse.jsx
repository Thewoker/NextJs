"use client"
import React from 'react'
import { db } from "@/firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import CardCourse from './CardCourse'

const getCourses = async () => {
  const courseRef = collection(db, 'into-courses')
  const querySnapshot = await getDocs(courseRef)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

async function ListCourse() {
  const courses = await getCourses()
  return (
    <>
      {courses.map(course => <CardCourse key={course.slug} course={course} />)}
    </>
  )
}

export default ListCourse