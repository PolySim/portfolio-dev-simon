import { IsFormValid } from "@/type.ts";

const isFormValid: IsFormValid = (data) => {
  return data.message !== "" && data.name !== "" && data.email !== "";
};

export default isFormValid;
