const express = require("express");
const businessTypeController = require("./../controllers/businessTypeController");
const authController = require("./../controllers/authController");

const router = express.Router();

// Protect all routes
router.use(authController.protect);

// Restrict access to admin for business type creation, updating, and deleting
router.use(authController.restrictTo("admin"));

router
  .route("/")
  .post(businessTypeController.createBusinessType) // Create a business type
  .get(businessTypeController.getAllBusinessTypes); // Get all business types

router
  .route("/:id")
  .get(businessTypeController.getBusinessType) // Get a single business type
  .patch(businessTypeController.updateBusinessType) // Update a business type
  .delete(businessTypeController.deleteBusinessType); // Delete a business type

module.exports = router;
