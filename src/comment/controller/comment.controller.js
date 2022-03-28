import Comment from "./../model/comment.model.js";

export const createComment = async (req, res) => {
  if (!req.body.blog) req.body.blog = req.params.blogId;
  if (!req.body.author) req.body.author = req.user._id;
  console.log(req.user);

  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json({
      status: "success",
      message: "hello",
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
    res.status(200).json({
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
