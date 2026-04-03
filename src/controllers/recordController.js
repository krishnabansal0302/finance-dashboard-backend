import Record from "../models/record.js";

// ➕ Create Record
export const createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      createdBy: req.user._id
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 Get All Records (with filtering)
export const getRecords = async (req, res) => {
  try {
    const { type, category } = req.query;

    let filter = { createdBy: req.user._id };

    if (type) filter.type = type;
    if (category) filter.category = category;

    const records = await Record.find(filter).sort({ date: -1 });

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ Update Record
export const updateRecord = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) return res.status(404).json({ message: "Record not found" });

    if (record.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const updated = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ Delete Record
export const deleteRecord = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) return res.status(404).json({ message: "Record not found" });

    if (record.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await record.deleteOne();

    res.json({ message: "Record deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};