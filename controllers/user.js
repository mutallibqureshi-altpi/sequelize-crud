const express = require("express");
const user = require("../model/user.json");
const User = require("../model/user.model");
const path = require("path");
const fsPromises = require("fs/promises");

const getAllUser = async (req, res) => {
  const data = await User.findAll();
  res.send(data);
};

const getUser = async (req, res) => {
  const data = await User.findByPk(req.params.id);
  res.send(data);
};

const updateUser = async (req, res) => {
  const data = await User.update(
    { email: req.body.email },
    { where: { id: req.params.id } }
  );
  res.send(data);
};

const deleteUser = async (req, res) => {
  const data = await User.destroy({ where: { id: req.params.id } });
  res.json({ message: "done" });
};

module.exports = { getAllUser, getUser, updateUser, deleteUser };
