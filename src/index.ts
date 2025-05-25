/**
 * Adds a `css` method to the Array prototype if it doesn't already exist.
 *
 * The `css` method joins array elements into a single space-separated string,
 * trims any leading or trailing whitespace, and returns `null` if the result is an empty string.
 *
 * Example usage:
 * ```ts
 * const classes = ['btn', 'btn-primary', '', 'active'];
 * console.log(classes.css()); // "btn btn-primary active"
 *
 * const emptyClasses = ['', ' '];
 * console.log(emptyClasses.css()); // null
 * ```
 *
 * @returns The space-separated string of array elements, or `null` if empty.
 */
export {};

declare global {
  interface Array<T> {
    /**
     * Join elements into a space-separated string, or `null` if empty.
     */
    css(this: Array<T>): string | null;
  }
}

if (!Array.prototype.css) {
  Object.defineProperty(Array.prototype, 'css', {
    value: function <T>(this: Array<T>): string | null {
      const trimmed = this
        .map(item => String(item))
        .join(' ')
        .trim();

      return trimmed === '' ? null : trimmed;
    },
    writable: true,
    configurable: true,
    enumerable: false,
  });
}
