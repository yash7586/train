import express from "express";
import Lead from "../models/Lead.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // 1️⃣ Save data to MongoDB
    const lead = await Lead.create(req.body);

    // 2️⃣ Send email to provider
    await sendEmail(req.body);

    res.status(201).json({
      success: true,
      message: "Form saved and email sent",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;