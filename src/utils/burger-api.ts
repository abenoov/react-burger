

const apiURL = "https://norma.nomoreparties.space/api";

const checkReponse = (res: any) => {
  return res.ok ? res.json() : res.json().then((err: any) => Promise.reject(err));
};

export {
  apiURL, 
  checkReponse
}