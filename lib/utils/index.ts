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
