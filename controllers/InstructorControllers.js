const Instructor = require('../models/Instructor');

exports.createInstructor = async (req, res) => {
  try {
    const instructor = new Instructor(req.body);
    await instructor.save();
    res.status(201).json({ success: true, data: instructor });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getInstructorById = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id).populate('department');
    if (!instructor) {
        return res.status(404).json({ success: false, message: 'Instructor not found' });
        }
        res.status(200).json({ success: true, data: instructor });
        } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        }
        };
        
        exports.getAllInstructors = async (req, res) => {
        try {
        const instructors = await Instructor.find().populate('department');
        res.status(200).json({ success: true, data: instructors });
        } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        }
        };
