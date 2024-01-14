'use client'
import { React, useEffect, useState } from 'react';
import './Courses.css';
import { db } from '@/firebase/config';
import { doc, getDoc } from "firebase/firestore";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

function Courses() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCourse, setSelectedCourse] = useState('calculo1');
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    semPlan: "",
    semPlanPrice: 0,
    menPlan: "",
    menPlanPrice: 0,
    modalTitle: ""
  });

  useEffect(() => {
    const fetchData = async () => {

      const docRef = doc(db, "courses-main-page", selectedCourse);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data()
        setCourseData({
          title: data.title,
          description: data.description,
          semPlan: data.semPlan,
          semPlanPrice: data.semPlanPrice,
          menPlan: data.menPlan,
          menPlanPrice: data.menPlanPrice,
          modalTitle: data.modalTitle
        })
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchData();
  }, [selectedCourse]);


  return (
    <section className='py-10 flex flex-col items-center justify-center relative'>
      <div><h2 className='courses'>Cursos</h2></div>
      <label className='py-3'>
        <select name="selectedCourse" value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
          <option value="calculo1">Cálculo I</option>
          <option value="contabilidad">Cotabilidad</option>
          <option value="microeconomia">Introducción a la Microeconomia</option>
          <option value="introduc-programacion">Introducción a la Programación</option>
        </select>
      </label>

      <div className='container1'>
        <div className={`section section-1 relative gap`}>
          <h1>{courseData?.title}</h1>
          <p>{courseData?.description}</p>
          <img src="imgs/logo.png" alt="Logo" className="logo-courses" />
        </div>
        <div className={`section section-2`}>
          <h1>Plan Mensual</h1>
          <p>{courseData?.menPlan}</p>
        </div>
        <div className={`section section-3`}>
          <h1>Plan Semestral</h1>
          <p>{courseData?.semPlan}</p>
        </div>
      </div>

      {/* Modal Start */}
      <button class="button button1" onClick={onOpen}>MAS INFO.</button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='4xl'>
        <ModalContent>
          {(onClose) => (
            <div className='modal-container'>
              <ModalHeader className="flex flex-col justify-center items-center text-xl text-center text-white font-semibold">{courseData.modalTitle}</ModalHeader>
              <ModalBody className='modal-content flex'>
                <div className="card card-left">
                  <div className="card-content ">
                    <h3>Aprende durante todo el semestre</h3>
                    <p>${courseData.semPlanPrice}</p>
                    <p>Plan Semestral</p>
                    <button>Quiero inscribirme</button>
                    <div className='relative logo-modal py-1'>
                      <img src="/imgs/logo.png" alt="Logo" className=''/>
                    </div>
                  </div>
                </div>
                <div className="card card-right">
                  <div className="card-content relative">
                    <h3>Aprende cada mes</h3>
                    <p>${courseData.menPlanPrice}</p>
                    <p>Plan Mensual</p>
                    <button>Quiero inscribirme</button>
                    <div className='relative logo-modal py-1'>
                      <img src="/imgs/logo.png" alt="Logo" className=''/>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>

    </section>

  )
}

export default Courses