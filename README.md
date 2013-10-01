esprima.jsx
===========================================

Synopsis
---------------

JSX wrapper for Esprima that is a high performance, standard-compliant ECMAScript parser.

Code Example
---------------

```js
import "esprima.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        // Write simple usage here!
    }
}
```

Motivation
---------------

Write a short description of the motivation behind the creation and maintenance of the project.
This should explain why the project exists.

Installation
---------------

Type following command in your JSX project (if you don't create `package.json`, omit `--save` parameter):

```sh
$ npm install esprima.jsx --save
$ npm install esprima --save
```

Adds the following statement in your code:

```js
import "node_modules/esprima.jsx/lib/esprima.jsx";
```

API Reference
------------------

*   `esprima.parse(sourcecode : string) : EsprimaToken`

    Return tokens.

*   `esprima.parse(sourcecode : string, option : Map.<boolean>) : EsprimaToken`

    Return tokens with options.

    ```js
    var tokens = esprima.parse(source, new EsprimaOption({
      loc: true,
      range : true,
      raw : false,
      tokens : true,
      comment : true,
      tolerant : false
    });
    ```

    * `loc`: Nodes have line and column-based location info
    * `range`: Nodes have an index-based location range (array)
    * `raw`: Literals have extra property which stores the verbatim source
    * `tokens`: An extra array containing all found tokens
    * `comment`: An extra array containing all line and block comments
    * `tolerant`: An extra array containing all errors found, attempts to continue parsing when an error is encountered

Development
-------------

## Repository

* Repository: git@github.com:shibukawa/esprima.jsx.git
* Issues: https://github.org/shibukawa/esprima/issues

## Run Test

```sh
$ grunt test
```

## Build

```sh
# Generate API reference
$ grunt doc

# Build application or library for JS project
$ grunt build
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

BSD-2-Clause

Complete license is written in `LICENSE.md`.
