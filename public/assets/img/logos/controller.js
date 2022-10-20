const Service = require("./service");
const _ = require("lodash");
const Model = require("./model");
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let login = await Service.login(email, password);

    return res.json({
      status: true,
      ...login,
    });
  } catch (error) {
    console.log(error, "login error");
    return res.json({ status: false, message: error.message });
  }
};

const getUsers = async (req, res) => {
  const { type: requestUserType, userId } = req.user;
  const { limit, skip, startDate, endDate, type } = req.query;

  try {
    const usersQuery = _.omitBy(
      {
        parentUser:
          requestUserType == Model.USER_TYPES.MANAGER ? userId : undefined,
        type,
        created_at:
          startDate || endDate
            ? {
                $gte: startDate
                  ? new Date(startDate)
                  : moment().startOf("day").toDate(),
                $lte: endDate
                  ? new Date(endDate)
                  : moment().endOf("day").toDate(),
              }
            : undefined,
      },
      (a) => a === undefined
    );
    let users = await Service.getUsers(usersQuery, {
      queryOptions: { limit, skip },
    });

    return res.json({ status: true, ...users });
  } catch (error) {
    console.log(error.message, "getUsers error");
    return res.json({ status: false, message: error.message });
  }
};

const getManager = async (req, res) => {
  try {
    const managerQuery = _.omitBy(
      {
        _id: req.params.managerId,
      },
      (a) => a === undefined
    );

    let manager = await Service.getManager(managerQuery);
    return res.json({ status: true, manager });
  } catch (error) {
    console.log(error.message, "getManager error");
    return res.json({ status: false, message: error.message });
  }
};

const addManager = async (req, res) => {
  const { name, email, password, companyId } = req.body;

  try {
    let manager = await Service.addManager(name, email, password, companyId);

    return res.json({
      status: true,
      manager,
    });
  } catch (error) {
    console.log(error, "addManager error");
    return res.json({ status: false, message: error.message });
  }
};

const updateManager = async (req, res) => {
  const { manager } = req.body;
  const { managerId } = req.params;

  try {
    let updatedManager = await Service.updateManager(managerId, manager);

    return res.json({
      status: true,
      updatedManager,
    });
  } catch (error) {
    console.log(error, "updateManagererror");
    return res.json({ status: false, message: error.message });
  }
};

const deleteManager = async (req, res) => {
  const { managerId } = req.params;

  try {
    await Service.deleteManager(managerId);

    return res.json({
      status: true,
    });
  } catch (error) {
    console.log(error, "deleteManager error");
    return res.json({ status: false, message: error.message });
  }
};

const addStaff = async (req, res) => {
  const { userId } = req.user;
  const { name, email, password } = req.body;

  try {
    let staff = await Service.addStaff(name, email, password, userId);

    return res.json({
      status: true,
      staff,
    });
  } catch (error) {
    console.log(error, "addStaff error");
    return res.json({ status: false, message: error.message });
  }
};

const getStaff = async (req, res) => {
  try {
    const staffQuery = _.omitBy(
      {
        _id: req.params.staffId,
      },
      (a) => a === undefined
    );

    let staff = await Service.getStaff(staffQuery);
    return res.json({ status: true, staff });
  } catch (error) {
    console.log(error.message, "getStaff error");
    return res.json({ status: false, message: error.message });
  }
};

const updateStaff = async (req, res) => {
  const { userId: managerId, type } = req.user;
  const { staff } = req.body;
  const { staffId } = req.params;

  try {
    let updateStaff = await Service.updateStaff(
      staffId,
      staff,
      managerId,
      type
    );

    return res.json({
      status: true,
      updateStaff,
    });
  } catch (error) {
    console.log(error, "updateStaff error");
    return res.json({ status: false, message: error.message });
  }
};

const deleteStaff = async (req, res) => {
  const { userId: managerId, type } = req.user;
  const { staffId } = req.params;

  try {
    await Service.deleteStaff(staffId, managerId, type);

    return res.json({
      status: true,
    });
  } catch (error) {
    console.log(error, "deleteStaff error");
    return res.json({ status: false, message: error.message });
  }
};

const verifyToken = async (req, res) => {
  const { type, email } = req.user;
  return res.json({ status: true, type, email });
};

async function changeMyPassword(req, res) {
  const { email } = req.user;
  let { oldPassword, newPassword } = req.body;

  try {
    await Service.changeMyPassword(email, oldPassword, newPassword);

    return res.json({
      status: true,
    });
  } catch (error) {
    console.log(error, "changeMyPassword error");
    return res.json({
      status: false,
      message: error.message,
    });
  }
}
async function changeSomeonePassword(req, res) {
  const {
    type,
    email: requestOwnerEmail,
    userId: requestOwnerUserId,
  } = req.user;
  let { newPassword, email } = req.body;

  try {
    await Service.changeSomeonePassword(
      email,
      oldPassword,
      newPassword,
      type,
      requestOwnerEmail,
      requestOwnerUserId
    );

    return res.json({
      status: true,
    });
  } catch (error) {
    console.log(error, "changeSomeonePassword error");
    return res.json({
      status: false,
      message: error.message,
    });
  }
}

const pingUser = async (req, res) => {
  const { userId } = req.user;
  const { tagId } = req.body;

  try {
    await Service.pingUser(userId, tagId);

    return res.json({
      status: true,
    });
  } catch (error) {
    console.log(error, "pingUser error");
    return res.json({ status: false, message: error.message });
  }
};

module.exports = {
  login,
  getUsers,
  addManager,
  getManager,
  updateManager,
  deleteManager,
  addStaff,
  getStaff,
  updateStaff,
  deleteStaff,
  verifyToken,
  changeMyPassword,
  changeSomeonePassword,
  pingUser,
};
