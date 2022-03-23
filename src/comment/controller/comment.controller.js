import Comment from "./../model/comment.model.js";

export const createComment = async (req, res) => {
  try {
    const newComment = await Comment.create({
      fullName: req.body.fullName,
      comment: req.body.comment,
    });
    res.status(201).json({
      status: "success",
      data: {
        comment: newComment,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const getComments = await Comment.find();

    res.status(200).json({
      status: "success",
      number: getComments.length,
      data: {
        Comment: getComments,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

export const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};
