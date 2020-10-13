const isEmpty = (value) => {
  if (
    value === null ||
    value === undefined ||
    (typeof value === "object" && Object.keys(value)) ||
    (typeof value === "string" && value.trim.length === 0)
  ) {
  }
};

module.exports = isEmpty;
