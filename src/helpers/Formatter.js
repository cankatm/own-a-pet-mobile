import * as formatterValues from './DefaultFormatterValues';

export const petImageFormatter = petType => {
  return formatterValues.petImages[petType];
};

export const petTypeFormatter = petType => {
  return formatterValues.petTypes[petType];
};

export const cityFormatter = city => {
  return formatterValues.turkeyCities[city];
};
