# @bhhaskin/next-utils

A small TypeScript utilities library for Next.js projects, bundled with Rollup.  
Currently it provides one handy extension on the JavaScript `Array` prototype:

- **`Array.prototype.css()`**  
  Joins array elements into a space-separated string of CSS classes, trimmed, and returns `null` if the result is empty.

---

## Table of Contents

- [Installation](#installation)  
- [Usage](#usage)  
  - [Array.prototype.css](#arrayprototypecss)  
- [Building](#building)  
- [Contributing](#contributing)  
- [License](#license)

---

## Installation

**Pin to the v0.1.x release line**:

Using **Yarn** (v4+ with Corepack):

```bash
yarn add @bhhaskin/next-utils@~0.1.0
```

Or with **npm**:

```bash
npm install @bhhaskin/next-utils@~0.1.0
```

---

## Usage

Since this package augments the global `Array` interface, you only need to import it once (for example, in your `_app.tsx` or main entry file):

```ts
// _app.tsx or src/index.ts
import '@bhhaskin/next-utils';
```

After that, every array has the `.css()` method:

```ts
const classes = ['btn', 'btn-primary', '', 'active'];
console.log(classes.css()); // → "btn btn-primary active"

const empty: string[] = ['', ' '];
console.log(empty.css());   // → null
```

### Array.prototype.css

```ts
css(this: Array<any>): string | null
```

- **Behavior**  
  1. Converts every element to a string  
  2. Joins them with a single space  
  3. Trims leading/trailing whitespace  
  4. Returns `null` if the trimmed result is an empty string

---

## Building

This project uses **Rollup** to bundle for both CommonJS and ESM.  

- **Dev build** (watches for changes):  
  ```bash
  yarn build:watch
  ```

- **One-off build**:  
  ```bash
  yarn build
  ```

Your bundled files will be output to `dist/` (as configured in `rollup.config.js`).

---

## Contributing

1. Fork the repo  
2. Create a feature branch: `git checkout -b feat/my-new-util`  
3. Implement your utility in `src/`  
4. Add tests (if applicable)  
5. Build locally: `yarn build`  
6. Open a Pull Request—describe your changes and any migration steps

---

## License

Distributed under the **MIT** License. See [LICENSE.md](LICENSE.md) for details.  
