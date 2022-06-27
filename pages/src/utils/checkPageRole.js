import { isEmpty } from "lodash";

export const checkPageRole = (list, hash) => {
  let check = false;
  if (!isEmpty(list)) {
    const hashList = list
      .filter((filter) => filter.Url !== "")
      .map((element) => element.Url);

    if (!isEmpty(hashList)) {
      if (hashList.indexOf(hash) > -1) {
        check = true;
      } else if (hash === "/login") {
        check = true;
      } else if (hash === "/register") {
        check = true;
      } else {
        check = false;
      }
    }
  }

  return check;
};
