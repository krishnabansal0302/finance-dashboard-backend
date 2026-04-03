import Record from "../models/record.js";

// 📊 Dashboard Summary
export const getSummary = async (req, res) => {
  try {
    const userId = req.user._id;

    // 🧮 Total Income & Expense
    const totals = await Record.aggregate([
      { $match: { createdBy: userId } },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" }
        }
      }
    ]);

    let totalIncome = 0;
    let totalExpense = 0;

    totals.forEach((item) => {
      if (item._id === "income") totalIncome = item.total;
      if (item._id === "expense") totalExpense = item.total;
    });

    // 📊 Category Breakdown
    const categoryBreakdown = await Record.aggregate([
      { $match: { createdBy: userId } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    // 🕒 Recent Transactions
    const recentTransactions = await Record.find({ createdBy: userId })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense,
      categoryBreakdown,
      recentTransactions
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};