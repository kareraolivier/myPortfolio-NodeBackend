import Blog from "./../models/blog.model.js";

export const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      blog: req.body.blog,
    });

    res.status(201).json({
      status: "created successfully",
      data: {
        blog: newBlog,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json({
      status: "retrieved successfully",
      data: {
        blog,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const getBlogs = await Blog.find();

    res.status(200).json({
      status: "all blogs",
      number: getBlogs.length,
      data: {
        blog: getBlogs,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const updateBlogs = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidation: true,
    });

    res.status(200).json({
      status: "updated successfully",
      data: {
        blog: updateBlogs,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};
