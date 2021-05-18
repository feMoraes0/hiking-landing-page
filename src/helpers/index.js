const getElementPositionById = (identifier) => document.querySelector(`#${identifier}`).offsetTop;

export default {
  getElementPositionById,
};
