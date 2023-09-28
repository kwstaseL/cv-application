import { findBestMatch } from "../utils/findBestMatch";

export const availableNames = {
  EXPERIENCE: 0,
  EDUCATION: 1,
  PERSONAL_DETAILS: 2,
};
const labelToKeyMap = {};

// Add a label-to-key mapping
export const addMapping = (label) => {
  const key = findBestMatch(label, availableNames);
  if (key != null) {
    labelToKeyMap[label] = key;
  } else {
    return null;
  }
};

// Get the key corresponding to a label
export const getKey = (label) => {
  return labelToKeyMap[label];
};
