# card-check
Checks if a given card number is valid

![card-check-terminal-demo](demo.jpg)

## Features
- Accepts a string or numeric value and returns if the input is a valid card number
- Pretty prints the response in a CLI table by default
- Supports JSON response format through an optional `type` argument

## Requirements
- Node v4.4.6 or higher

## Installation
Step 1: Clone the repository
```zsh
git clone https://github.com/akhale3/card-check.git
```

Step 2: Install dependencies
```zsh
cd card-check/
npm install
```

## Execution
### Table output format
```zsh
node
> var validate = require('./index');
> validate('4744123456789012');
┌──────────────────┬──────┬───────────────────┬───────┐
│ Number           │ Type │ Potentially Valid │ Valid │
├──────────────────┼──────┼───────────────────┼───────┤
│ 4744123456789012 │ Visa │ true              │ false │
└──────────────────┴──────┴───────────────────┴───────┘
```

### JSON output format
```zsh
node
> var validate = require('./index');
> validate('4744123456789012','json');
{ card:
   { niceType: 'Visa',
     type: 'visa',
     prefixPattern: '^4$',
     exactPattern: '^4\\d*$',
     gaps: [ 4, 8, 12 ],
     lengths: [ 16, 18, 19 ],
     code: { name: 'CVV', size: 3 } },
  isPotentiallyValid: true,
  isValid: false }
```
