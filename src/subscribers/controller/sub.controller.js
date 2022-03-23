import Subscriber from "./../model/sub.model.js";

export const createSubscription = async (req, res) => {
  try {
    const newSubscriber = await Subscriber.create({
      email: req.body.email,
    });
    res.status(201).json({
      status: "success",
      data: {
        email: newSubscriber,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const getSubscription = async (req, res) => {
  try {
    const getSubscriber = await Subscriber.find();

    res.status(200).json({
      status: "success",
      number: getSubscriber.length,
      data: {
        email: getSubscriber,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

export const deleteSubscription = async (req, res) => {
  try {
    await Subscriber.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "deleted",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};
