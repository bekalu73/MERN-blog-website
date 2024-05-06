import express from "express";
const LogoutController = (req, res) => {
  return res.cookie("token", "").status(200).json("Logged Out successfully");
};

export default LogoutController;
