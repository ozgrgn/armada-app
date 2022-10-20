const post = async (url, body) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    console.log("error", error);
  }
};

const postFormData = async (url, body) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.json();
  } catch (error) {
    console.log("error", error);
  }
};

const put = async (url, body) => {
  try {
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    console.log("error", error);
  }
};

const get = async (url, params) => {
  let requestUrl = new URL(url);
  requestUrl.search = new URLSearchParams(params).toString();

  try {
    let response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log("error", error);
    return undefined;
  }
};

const _delete = async (url, params) => {
  let requestUrl = new URL(url);
  requestUrl.search = new URLSearchParams(params).toString();

  try {
    let response = await fetch(requestUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log("error", error);
    return undefined;
  }
};

export default {
  get,
  post,
  put,
  delete: _delete,
  postFormData,
};
