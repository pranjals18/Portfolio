const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// ✅ 1. Create a new testimonial
router.post("/", async (req, res) => {
  try {
    const { name, text } = req.body;

    if (!name || !text) {
      return res.status(400).json({ error: "Name and text are required" });
    }

    const testimonial = new Testimonial({ name, text });
    await testimonial.save();
    
    res.status(201).json({ message: "Testimonial submitted for approval", testimonial });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// // ✅ 2. Get all **approved** testimonials (for website display)
// router.get("/", async (req, res) => {
//   try {
//     const testimonials = await Testimonial.find({ approved: true });
//     res.json(testimonials);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // ✅ 3. Get all **pending** testimonials (for admin approval)
// router.get("/pending", async (req, res) => {
//   try {
//     const testimonials = await Testimonial.find({ approved: false });
//     res.json(testimonials);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // ✅ 4. Approve a testimonial
// router.put("/testimonial/:id/", async (req, res) => {
//   try {
//     const testimonial = await Testimonial.findById(req.params.id);

//     if (!testimonial) {
//       return res.status(404).json({ error: "Testimonial not found" });
//     }

//     testimonial.approved = !testimonial.approved;

//     await testimonial.save();

//     res.json({ message: "Testimonial approved", testimonial });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });





// ✅ Get all testimonials (both approved and pending)
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Toggle approval status of a testimonial
router.put("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    testimonial.approved = !testimonial.approved;
    await testimonial.save();

    res.json({ message: "Testimonial approval status updated", testimonial });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
