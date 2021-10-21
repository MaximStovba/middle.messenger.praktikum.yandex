/** JSDoc
   * @param {Object} obj
   * @param {string} path
   * @param {string} defaultValue
   *
   * @returns {any}
   */
export function get(obj: object, path: string, defaultValue?: string): unknown {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }
  return result || defaultValue;
}
