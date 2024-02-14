import endpoint from "shared/endpoint";

export function postUserData(data: any) {
  return endpoint.post("/users", data);
}
export function getUserData(values: any) {
  return endpoint.get(
    `/users?email=${values.email}&password=${values.password}`,
  );
}
