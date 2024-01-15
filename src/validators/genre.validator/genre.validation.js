const { body } = require("express-validator");

function createGenreValidation() {
  return [
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isString()
      .withMessage("name must be a string")
      .isLength({ min: 4, max: 100 })
      .withMessage("name should contain 4-100 characters"),

    body("description")
      .notEmpty()
      .withMessage("description is required")
      .isString(),
  ];
}

function updateGenreValidation() {
  return [
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isString()
      .withMessage("name must be a string")
      .isLength({ min: 5, max: 100 })
      .withMessage("name should contain 5-100 characters"),

    body("description")
      .notEmpty()
      .withMessage("description is required")
      .isString(),
  ];
}

module.exports = {
  updateGenreValidation,
  createGenreValidation,
};
