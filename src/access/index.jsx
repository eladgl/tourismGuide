import { isUndefined, isObject, isString } from "lodash";
import { getFromConfig } from "./gate";
import memoize from "memoizee";

/**
 * Memoize function
 *
 * This function memoizes the results of another function to optimize performance.
 * It uses the 'memoizee' library and stores results based on primitive values (e.g., strings, numbers).
 *
 * @param {Function} func - The function to be memoized.
 * @returns {Function} - The memoized function.
 */
const memo = (func) => {
  return memoize(func, { primitive: true });
};

/**
 * Get function
 *
 * This function retrieves a value from a nested object structure based on a provided path.
 * The path can be a string (e.g., 'a.b.c') or an array of keys (e.g., ['a', 'b', 'c']).
 *
 * @param {Object} collection - The object to retrieve the value from.
 * @param {string|array} path - The path to the value in the object.
 * @param {string} [delimiter='.'] - The delimiter used to split the path string (default is '.').
 * @returns {*} - The value found at the specified path or undefined if the path does not exist.
 */
const get = (collection, path, delimiter = ".") => {
  if (!path) return collection;

  let value = collection;

  if (typeof path === "string") {
    path = path.split(delimiter);
  }

  for (let i = 0; i < path.length; i++) {
    if (typeof value === "undefined") {
      return undefined;
    }
    value = value[path[i]];
  }

  return value;
};

/**
 * Get Nested End Value function
 *
 * This function recursively processes a nested object structure, replacing any string values
 * that contain a delimiter with the result of another nested get operation.
 *
 * @param {Object} newObject - The new object to store processed values.
 * @param {Object} obj - The original object to process.
 * @param {string} type - The type of data being retrieved (e.g., 'colors', 'icons').
 * @param {string} delimiter - The delimiter used in string values.
 * @returns {Object} - The fully processed nested object.
 */
const getNestedEndValue = (newObject = {}, obj, type, delimiter) => {
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    const value = obj[key];

    if (isUndefined(value)) newObject[key] = undefined;
    else if (Array.isArray(value)) newObject[key] = value;
    else if (isObject(value)) {
      newObject[key] = getNestedEndValue({}, value, type, delimiter);
    } else if (isString(value)) {
      if (value.indexOf(delimiter) > -1) {
        // eslint-disable-next-line no-use-before-define
        newObject[key] = getNested(type, value);
      } else {
        newObject[key] = value;
      }
    }
  });

  return newObject;
};

/**
 * Get Nested function
 *
 * This function retrieves a value from a nested object structure, resolving any nested references.
 *
 * @param {string} type - The type of data being retrieved (e.g., 'colors', 'icons').
 * @param {string} path - The path to the value in the configuration.
 * @param {string} [delimiter='.'] - The delimiter used to split the path string (default is '.').
 * @returns {*} - The final resolved value from the configuration.
 */
const getNested = (type, path, delimiter = ".") => {
  const collection = getFromConfig(type);
  const code = get(collection, path, delimiter);

  if (isUndefined(code)) return undefined;
  if (Array.isArray(code)) return code;
  if (isObject(code)) return getNestedEndValue({}, code, type, delimiter);
  if (isString(code)) {
    if (code.indexOf(delimiter) > -1) return getNested(type, code);
  }

  return code;
};

// Helper functions to retrieve specific types of data from the configuration
const getColor = (path) => {
  return getNested("colors", path);
};

const getIcon = (path) => {
  return getNested("icons", path);
};

const getGeneral = (path) => {
  return getNested("general", path);
};

// Theme management
let currentTheme = "light";
const getThemeState = () => {
  return currentTheme;
};

// Exporting memoized versions of the helper functions and theme state retrieval
export const icon = memo(getIcon);
export const color = memo(getColor);
export const general = memo(getGeneral);
export const getTheme = memo(getThemeState);
