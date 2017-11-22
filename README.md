# Expressionist

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fa6e844754f24c208f28522f9bb9fe1b)](https://www.codacy.com/app/konfirm/node-expressionist?utm_source=github.com&utm_medium=referral&utm_content=konfirm/node-expressionist&utm_campaign=badger)

Simple helper to perform basic preparations on strings to use them in Regular Expressions.

## Getting started

### Installation

```
$ npm install --save @konfirm/expressionist
```

### Usage

```
const Expressionist = require('@konfirm/expressionist');
```

#### `Expressionist.ungroup`
Replace potential capture groups with non-capture groups, while leaving existing non-capture groups (`(?:...)`) and lookaheads (positive (`(?=...)`) and negative (`(?!...)`)) intact.

```
const ungrouped = Expressionist.ungroup('(hello(world))');

console.log(ungrouped);  //  '(?:hello(?:world))
```

#### `Expressionist.escape`
Escape all characters with a special meaning in Regular Expressions so that these can be matched exactly

```
const escaped = Expressionist.escape('john.doe+label@example.com');

console.log(escaped);  //  'john\.doe\+label@example\.com'
```


## Licence

MIT License

Copyright (c) 2017 Konfirm

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
