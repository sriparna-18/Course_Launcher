// src/components/CoursesPage.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import './CoursesPage.css';

Modal.setAppElement('#root');

const courses = [
  { id: 1, title: 'Course 1', description: 'Description for Course 1' },
  { id: 2, title: 'Course 2', description: 'Description for Course 2' },
  // Add more courses as needed
];

const CoursesPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const openModal = (course) => {
    setSelectedCourse(course);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = (data) => {
    console.log('User Data:', data);
    closeModal();
  };

  return (
    <div className="courses-page">
      <h1>Our Courses</h1>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button onClick={() => openModal(course)}>Enroll</button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Authentication"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Enroll in {selectedCourse?.title}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              {...register('phone', { required: true })}
            />
            {errors.phone && <span>This field is required</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default CoursesPage;
