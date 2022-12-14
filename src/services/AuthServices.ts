import { Api } from "../helpers/endpoint/Api";
import { endpoint } from "../helpers/endpoint";
import { ErrorResponse } from "../types/api-types/error";
import { Login, LoginResponse } from "../types/api-types/login";
import {Register, RegisterResponse} from "../types/api-types/register";
import {User } from "../types/api-types/user";
import api from "../api/virtumed";

export const AuthService = {
  login: (loginData: Login): Promise<LoginResponse & ErrorResponse> =>
    Api(endpoint.auth(), {
      method: "POST",
      body: JSON.stringify(loginData),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error)),

  register: (registerData:Register):Promise<RegisterResponse & ErrorResponse> =>
  Api(endpoint.createUser(),{
    method:"POST",
    body: JSON.stringify(registerData),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "",
      },
  }).then((response) => response.json())
  .catch((error) => console.log(error)),

  me: (): Promise<User> =>
    Api(endpoint.auth(), { method: "GET" }).then((response) => response.json()),

  isAdmin: (): Promise<User> =>
    Api(endpoint.auth(), { method: "GET" })
      .then((response) => response.json())
      .then(function (data) {
        var role = data.IsAdmin;
        return role})
     
};