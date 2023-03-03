const express = require('express');
const router = express.Router();
const courseController = require('../controllers/CourseControllers');
const instructorController = require('../controllers/InstructorControllers');
const departmentController = require('../controllers/DepartmentControllers');
const studentController = require('../controllers/StudentControllers')
// Courses
router.post('/courses', courseController.createCourse);
router.get('/courses/:id', courseController.getCourseById);
router.get('/courses', courseController.getAllCourses);

// Instructors
router.post('/instructors', instructorController.createInstructor);
router.get('/instructors/:id', instructorController.getInstructorById);
router.get('/instructors', instructorController.getAllInstructors);

// Departments
router.post('/departments', departmentController.createDepartment);
router.get('/departments/:id', departmentController.getDepartmentById);
router.get('/departments', departmentController.getAllDepartments);

//student
router.get('/students',studentController.getAllStudents)
router.get('/students/:id',studentController.getStudentById)
router.post('/students',studentController.createStudent)
router.put('/students/:id',studentController.updateStudent)
router.delete('/students/:id',studentController.deleteStudent)
module.exports = router;
