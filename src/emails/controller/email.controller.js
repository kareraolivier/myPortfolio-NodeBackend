import Email from "./../model/email.model.js";

export const createEmail = async (req, res) => {
  try {
    const newEmail = await Email.create({
      fullName: req.body.fullName,
      email: req.body.email,
      message: req.body.message,
    });
    res.status(201).json({
      status: "created successfully",
      data: {
        email: newEmail,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const getAllEmail = async (req, res) => {
  try {
    const allEmails = await Email.find();
    res.status(200).json({
      status: "successfully",
      number: allEmails.length,
      data: {
        email: allEmails,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

export const getSingleEmail = async (req, res) => {
  try {
    const singleEmail = await Email.findById(req.params.id);
    res.status(200).json({
      status: "successfully",
      data: {
        email: singleEmail,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};

export const deleteEmail = async (req, res) => {
  try {
    await Email.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "not deleted",
      error,
    });
  }
};
