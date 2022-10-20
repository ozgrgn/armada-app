import Http from "./http";
import ENV from "../env";
const login = (email, password) => {
  return Http.post(`${ENV.API_URL}/user/login`, { email, password });
};

const verifyToken = () => {
  return Http.post(`${ENV.API_URL}/user/verify-token`);
};
const getGeneral = () => {
  return Http.get(`${ENV.API_URL}/general`);
};

const updateGeneral = ( data) => {
  return Http.put(`${ENV.API_URL}/general`, {
    general: data,
  });
};


const getMenu = () => {
  return Http.get(`${ENV.API_URL}/menu`);
};

const updateMenu = ( data) => {
  return Http.put(`${ENV.API_URL}/menu`, {
    menu: data,
  });
};

const getHome = () => {
  return Http.get(`${ENV.API_URL}/home`);
};

const updateHome = ( data) => {
  return Http.put(`${ENV.API_URL}/home`, {
    home: data,
  });
};
const getForm= () => {
  return Http.get(`${ENV.API_URL}/form`);
};

const updateForm = ( data) => {
  return Http.put(`${ENV.API_URL}/form`, {
    form: data,
  });
};

const uploadImage = (file) => {
  const formData = new FormData();

  formData.append("file", file);

  return Http.postFormData(`${ENV.API_URL}/storage/upload`, formData);
};

// Reviews
const getReviews = (limit, skip) => {
  let data = {};

  return Http.get(`${ENV.API_URL}/review`, { ...data });
};
const addReview = (data) => {
  return Http.post(`${ENV.API_URL}/review`, data);
};

const updateReview = (reviewId, data) => {
  return Http.put(`${ENV.API_URL}/review/${reviewId}`, {
    review: data,
  });
};

const getReview = (reviewId) => {
  return Http.get(`${ENV.API_URL}/review/${reviewId}`);
};

const deleteReview = (reviewId) => {
  return Http.delete(`${ENV.API_URL}/review/${reviewId}`);
};


// Treatments
const getTreatments = (limit, skip) => {
  let data = {};

  return Http.get(`${ENV.API_URL}/treatment`, { ...data });
};
const addTreatment = (data) => {
  return Http.post(`${ENV.API_URL}/treatment`, data);
};

const updateTreatment = (treatmentId, data) => {
  return Http.put(`${ENV.API_URL}/treatment/${treatmentId}`, {
    treatment: data,
  });
};

const getTreatment = (treatmentId) => {
  return Http.get(`${ENV.API_URL}/treatment/${treatmentId}`);
};
const getTreatmentByLink = (tratmentLink) => {
  return Http.get(`${ENV.API_URL}/treatment/link/${tratmentLink}`);
};

const deleteTreatment = (treatmentId) => {
  return Http.delete(`${ENV.API_URL}/treatment/${treatmentId}`);
};
// Cags
const getTags = (limit, skip) => {
  let data = {};
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  return Http.get(`${ENV.API_URL}/tag`, { ...data });
};
const addTag = (data) => {
  return Http.post(`${ENV.API_URL}/tag`, data);
};

const updateTag = (tagId, data) => {
  return Http.put(`${ENV.API_URL}/tag/${tagId}`, {
    tag: data,
  });
};

const getTag = (tagId) => {
  return Http.get(`${ENV.API_URL}/tag/${tagId}`);
};

const deleteTag = (tagId) => {
  return Http.delete(`${ENV.API_URL}/tag/${tagId}`);
};

// Templates
const getTemplates = (limit, skip, companyId) => {
  let data = {};
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }

  if (companyId) {
    data.companyId = companyId;
  }
  return Http.get(`${ENV.API_URL}/template`, { ...data });
};
const addTemplate = (data) => {
  return Http.post(`${ENV.API_URL}/template`, data);
};

const updateTemplate = (templateId, data) => {
  return Http.put(`${ENV.API_URL}/template/${templateId}`, {
    template: data,
  });
};

const getTemplate = (templateId) => {
  return Http.get(`${ENV.API_URL}/template/${templateId}`);
};

const deleteTemplate = (templateId) => {
  return Http.delete(`${ENV.API_URL}/template/${templateId}`);
};

// Managers
const getManagers = (limit, skip) => {
  let data = {};
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  data.type = ENV.USER_TYPES.MANAGER;
  return Http.get(`${ENV.API_URL}/user`, { ...data });
};
const addManager = (data) => {
  return Http.post(`${ENV.API_URL}/user/manager`, data);
};

const updateManager = (managerId, data) => {
  return Http.put(`${ENV.API_URL}/user/manager/${managerId}`, {
    manager: data,
  });
};

const getManager = (managerId) => {
  return Http.get(`${ENV.API_URL}/user/manager/${managerId}`);
};

const deleteManager = (managerId) => {
  return Http.delete(`${ENV.API_URL}/user/manager/${managerId}`);
};

// Staffs
const getStaffs = (limit, skip) => {
  let data = {};
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  data.type = ENV.USER_TYPES.STAFF;
  return Http.get(`${ENV.API_URL}/user`, { ...data });
};
const addStaff = (data) => {
  return Http.post(`${ENV.API_URL}/user/staff`, data);
};

const updateStaff = (staffId, data) => {
  return Http.put(`${ENV.API_URL}/user/staff/${staffId}`, {
    staff: data,
  });
};

const getStaff = (staffId) => {
  return Http.get(`${ENV.API_URL}/user/staff/${staffId}`);
};

const deleteStaff = (staffId) => {
  return Http.delete(`${ENV.API_URL}/user/staff/${staffId}`);
};
export default {
  login,
  verifyToken,
  uploadImage,

  //armada general
  getGeneral,
  updateGeneral,
  getMenu,
  updateMenu,
  getHome,
  updateHome,
  getForm,
  updateForm,

  //reviews
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,

    //treatments
    getTreatments,
    getTreatment,
    getTreatmentByLink,
    addTreatment,
    updateTreatment,
    deleteTreatment,

  //tags
  getTags,
  getTag,
  addTag,
  updateTag,
  deleteTag,

  //managers
  getManagers,
  getManager,
  addManager,
  updateManager,
  deleteManager,

  //staffs
  getStaffs,
  getStaff,
  addStaff,
  updateStaff,
  deleteStaff,

  //companies
  getTemplates,
  getTemplate,
  addTemplate,
  updateTemplate,
  deleteTemplate,
};
