# eslint-config-internxt

This package provides the recommended ESLint configurations for all Internxt projects.


## Installation

1. Install eslint-config-internxt as a development dependency:

   ```
   yarn add --dev eslint-config-internxt
   ```

2. Add eslint-config-internxt to your ESLint configuration.

   - **Flat configuration** (eslint.config.mjs): Import eslint-config-internxt, and put it in the configuration array.

     <!-- prettier-ignore -->
     ```js
     import someConfig from "some-other-config-you-use";
     import eslintConfigInternxt from "eslint-config-internxt";

     export default [
       someConfig,
       eslintConfigInternxt,
     ];
     ```

## License

This project is based on MIT License. You can show it in the [License](LICENSE) file.
