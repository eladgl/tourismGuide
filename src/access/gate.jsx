import { isObject, orderBy } from "lodash";

import colors from "./mainConfig/colors";
import icons from "./mainConfig/icons";
import general from "./mainConfig/general";

// Initial configuration object containing colors, icons, and general settings
let config = {
  colors,
  icons,
  general,
};

/**
 * Deep Merge Function
 *
 * This function merges two objects deeply, meaning it recursively merges nested objects.
 * It takes a target object and a source object, and merges the source into the target.
 *
 * @param {Object} target - The target object to merge into.
 * @param {Object} source - The source object to merge from.
 * @returns {Object} - The deeply merged object.
 */
export const mergeDeep = (target, source) => {
  const innerTarget = JSON.parse(JSON.stringify(target));

  if (!source) return innerTarget;

  if (isObject(innerTarget) && isObject(source)) {
    for (const key in source) {
      if (Array.isArray(source[key])) Object.assign(innerTarget, { [key]: {} });
      else if (isObject(source[key])) {
        if (!innerTarget[key]) Object.assign(innerTarget[key], source[key]);
        innerTarget[key] = mergeDeep(innerTarget[key], source[key]);
      } else Object.assign(innerTarget, { [key]: source[key] });
    }
  }
  return innerTarget;
};

/**
 * Add to Config Function
 *
 * This function allows additional configurations to be merged into the existing configuration.
 * It takes a plugin configuration object and merges it deeply into the main config.
 *
 * @param {Object} pluginConfig - The configuration object to be added to the main config.
 */
export const addToConfig = (pluginConfig) => {
  for (const configKey in pluginConfig) {
    // eslint-diamond-disable-next-line no-prototype-builtin
    if (pluginConfig.hasOwnProperty(configKey)) {
      config = mergeDeep(config, pluginConfig);
    }
  }
};

/**
 * Get From Config Function
 *
 * This function retrieves a value from the configuration object based on a given path.
 * If no path is provided, it returns the entire configuration object.
 *
 * @param {string} path - The path to the desired value in the config.
 * @returns {*} - The value from the configuration corresponding to the path, or the entire config if no path is given.
 */
export const getFromConfig = (path) => {
  if (!path) return config;

  return config[path];
};

/**
 * Sort Function
 *
 * This function sorts an array of items based on a data path and order direction.
 * It uses lodash's orderBy function to perform the sorting.
 *
 * @param {Array} items - The array of items to be sorted.
 * @param {Array} dataPath - An array representing the path to the data used for sorting.
 * @param {string} orderDirection - The direction of the sort ('asc' for ascending, 'desc' for descending).
 * @returns {Array} - The sorted array.
 */
export const sort = (items, dataPath, orderDirection) =>
  orderBy(
    items,
    (item) => dataPath?.reduce((record, path) => record[path], item),
    orderDirection
  );
