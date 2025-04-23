const express = require("express");
const businessController = require("./../controllers/businessController");
const authController = require("./../controllers/authController"); // Assuming you have an auth controller

const router = express.Router();

// Protect all routes
router.use(authController.protect);

// Routes for users to create, update, get, and delete their business
router.route("/").post(
  authController.restrictTo("user"), // Only users can create businesses
  businessController.uploadBusinessDocuments,
  businessController.createBusiness
);

router
  .route("/:id")
  .get(businessController.getBusiness) // Get a single business
  .patch(
    authController.restrictTo("user"), // Only users can update their business
    businessController.uploadBusinessDocuments,
    businessController.updateBusiness
  )
  .delete(
    authController.restrictTo("user"), // Only users can delete their business
    businessController.deleteBusiness
  );

module.exports = router;
