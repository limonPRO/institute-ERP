const Student = require('../models/students');

// Get all students
exports.getAllStudents = (req, res) => {
    try{
     Student.find()
    .populate('department')
    .exec()
    .then(students => {
        res.json(students); 
     })
    }catch(error){
        res.status(400).json({ success: false, message: err.message });
    }
//   Student.find()
//     .populate('department')
//     .exec((err, students) => {
//       if (err) {
//         return res.status(500).json({
//           error: err
//         });
//       }
//       res.status(200).json({
//         data: students
//       });
//     });
};

// Get a single student by ID
exports.getStudentById = async (req, res) => {
    const id =req.params.id
try{
    const student = await Student.findById(_id=id)
    .populate('department')
  if (!student) {
    return res.status(404).json({ success: false, message: 'student not found' });
  }
  res.status(200).json({ success: true, data: student });
}catch(err){
    res.status(400).json({ success: false, message: err.message });
}
};

// Create a new student
exports.createStudent = async (req, res) => {
 try{
    const { name, email, department } = req.body;
    const student = new Student({
      name: name,
      email: email,
      department: department
    });
    await student.save();
    res.status(201).json({ success: true, data: student });
 } catch(err){
    res.status(400).json({ success: false, message: err.message });
 }
};

// Update an existing student
exports.updateStudent = async(req, res) => {
   try{
    const id = req.params.id 
    const {name , email , department}= req.body
    const student = await Student.findByIdAndUpdate (id,{
       name , email , department
    },{new :true})
    
    res.status(201).json({ success: true, data: student });   }
    catch(err){
        res.status(400).json({ success: false, message: err.message });
   }
//   const id = req.params.studentId;
//   const { name, email, department } = req.body;
//   Student.findByIdAndUpdate(id, {
//     name: name,
//     email: email,
//     department: department
//   }, { new: true }, (err, student) => {
//     if (err) {
//       return res.status(500).json({
//         error: err
//       });
//     }
//     if (!student) {
//       return res.status(404).json({
//         message: 'Student not found'
//       });
//     }
//     res.status(200).json({
//       message: 'Student updated successfully',
//       data: student
//     });
//   });
};

// Delete an existing student
exports.deleteStudent = (req, res) => {
  const id = req.params.studentId;
  Student.findByIdAndRemove(id,
    res.status(200).json({
      message: 'Student deleted successfully'
    }));
};
