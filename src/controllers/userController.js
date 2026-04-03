import User from "../models/user.js";

// 🔄 Update Role
export const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = role;
    await user.save();

    res.json({ message: "Role updated", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};