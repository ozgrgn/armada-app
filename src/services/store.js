import { writable } from "svelte/store";

const _email =
  localStorage.getItem("email") && localStorage.getItem("email") != "null"
    ? localStorage.getItem("email")
    : null;
export const email = writable(_email);
email.subscribe((value) => {
  localStorage.setItem("email", value);
});
const _type =
  localStorage.getItem("type") && localStorage.getItem("type") != "null"
    ? localStorage.getItem("type")
    : null;
export const type = writable(_type);
type.subscribe((value) => {
  localStorage.setItem("type", value);
});

const _token =
  localStorage.getItem("token") && localStorage.getItem("token") != "null"
    ? localStorage.getItem("token")
    : null;
export const token = writable(_token);
token.subscribe((value) => {
  localStorage.setItem("token", value);
});

const _lang =
  localStorage.getItem("lang") && localStorage.getItem("lang") != "tr" && localStorage.getItem("lang") != "null"
    ? localStorage.getItem("lang")
    : "en";

document.documentElement.setAttribute("lang", _lang);
export const lang = writable(_lang);
lang.subscribe((value) => {
  localStorage.setItem("lang", value);
});

export const navbar = writable({});




export const toast = writable({});
