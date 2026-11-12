export const getCategoriesParam = (param: string) => {
  switch (param) {
    case "with-work":
      return true;

    case "without-work":
      return false;

    default:
      return undefined;
  }
};

export const getUsersCategoriesParam = (param: string) => {
  switch (param) {
    case "is-online":
      return true;

    case "is-offline":
      return false;

    default:
      return undefined;
  }
};

export const getBooksCategoriesParam = (param: string) => {
  switch (param) {
    case "read":
      return true;

    case "unread":
      return false;

    default:
      return undefined;
  }
};
