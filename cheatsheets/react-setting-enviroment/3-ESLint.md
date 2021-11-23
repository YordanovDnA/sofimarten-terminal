Find more at: https://eslint.org

# Overview
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, 
with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to 
JSLint and JSHint with a few exceptions:

> ESLint uses Espree for JavaScript parsing.

> ESLint uses an AST to evaluate patterns in code.

> ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.
# eslint-config-airbnb
  Ready solution fom the airbnb team. 
  Checkout here when setting up: [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

    npx install-peerdeps --dev eslint-config-airbnb

  **Note:** if you're using **yarn** it you can use the above command as well, the terminal will automaticaly detect and run with **yarn**.

  **.eslintrc** config file:

    {
      "extends": [
        "airbnb",
        "airbnb/hooks",
        "airbnb/whitespace",
        "airbnb-base/legacy"
      ],
      "env": {
        "jest": true
      },
      "rules": {
        //Any rules you'd like to add
      }
    }

  **Note** This will be enbought for setting up. But if you'd like to do the configs on your own follow the process bellow. 

# Installation and Usage:

    npm install eslint --save-dev
  or

    yarn add eslint --dev

# Configuration: 
    $ npx eslint --init

  or

    $ yarn run eslint --init

  *** Usually after runing one of these commands you should be able to answer short questions on the terminal to set your eslint! ***

  After running eslint --init, you'll have a .eslintrc.{js,yml,json} file in your directory. In it, you'll see some rules configured like this:

    {
        "rules": {
            "semi": ["error", "always"],
            "quotes": ["error", "double"]
        }
    }

  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
  "error" or 2 - turn the rule on as an error (exit code will be 1)

  Your .eslintrc.{js,yml,json} configuration file will also include the line:

    {
        "extends": "eslint:recommended"
    }

  More about the configurations at: https://eslint.org/docs/user-guide/configuring/

---

<div style="width: 100%; display: flex; justify-content: flex-end;">
<a style="margin: 0 2.5px; padding: 5px 10px; background: #FF1744; text-decoration: none;" href="./2-node-sass.md">Back</a>
<a style="margin: 0 2.5px; padding: 5px 10px; background: #2979FF; text-decoration: none" href="#">Next</a>
</div> </br>


