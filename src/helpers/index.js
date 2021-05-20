const getAbsoluteElementPositionById = (identifier) => document.querySelector(`#${identifier}`).offsetTop;

export default {
  getAbsoluteElementPositionById,
};
