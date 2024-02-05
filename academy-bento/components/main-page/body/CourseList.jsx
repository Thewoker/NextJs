import React from 'react'
import Course from './Course';
import { db } from "@/firebase/config"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"

const getCursos = async () => {
  const cursosRef = collection(db, "cursos");
  const cursosSnapshot = await getDocs(cursosRef);
  const cursos = [];

  cursosSnapshot.forEach((doc) => {
    cursos.push(doc.data());
  });

  return cursos;
};

function CourseList({curso}) {
    return (
        <div>
            <Course />
        </div>
    )
}

export default CourseList