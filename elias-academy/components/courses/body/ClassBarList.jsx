import React, { useEffect, useState } from 'react';
import { db } from "@/firebase/config"
import { collection, doc, getDoc, query, where } from "firebase/firestore"
import { usePathname } from 'next/navigation'
import path from 'path';
import CardClass from './CardClass';

const getClases = async (currentFolder) => {
  const courseRef = collection(db, 'into-courses');
  const docSnapshot = await getDoc(doc(courseRef, currentFolder));
  const data = docSnapshot.data();

  if (data) {
    const classData = data.class;
    const lista1 = classData.find(item => item.title == 1);
    console.log("asdasdasdasdsadasdas")
    return classData;
  }

  return null;
}

function ClassBar() {
  const pathname = usePathname()
  const currentFolder = path.basename(pathname);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClases();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {courses.map((course) => (
        <CardClass key={course.title} course={course} />
      ))}
    </div>
  );
}

export default ClassBar