import React, { useEffect, useState } from 'react';
import { useAuthContext } from "@/contexts/AuthContext"
import { collection, getDocs, doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase/config"
import Curso from './Curso'

const getCourses = async (uid) => {
  const userRef = doc(db, 'usuarios', uid);
  const userSnapshot = await getDoc(userRef);
  const userData = userSnapshot.data();

  const cursoRef = collection(db, 'cursos');
  const cursoQuery = await getDocs(cursoRef);
  const allCourses = cursoQuery.docs.map(docSnapshot => docSnapshot.data());

  const userCourses = userData.cursos;
  const filteredCourses = allCourses.filter(course => userCourses.includes(course.slug));

  return filteredCourses;
}

function CursosList() {
  const { user } = useAuthContext();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    try{
      const fetchCourses = async () => {
        const fetchedCourses = await getCourses(user.uid);
        setCourses(fetchedCourses);
      };
      fetchCourses();
    }catch(e){
      console.log(e);
    }

  }, [user]);
  return (
    <div className='flex flex-row justify-center items-center flex-wrap gap-20 p-10'>
      {courses.map(course => <Curso key={course.slug} course={course} />)}
    </div>
  )
}

export default CursosList