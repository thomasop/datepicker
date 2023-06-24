# thomasop-date-picker

Data picker component

## Description
---
When you use this package one label and one input display now. When you click on input so modal will be open and you can choice any date


## Installation
---

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install hrnet-datepicker --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add hrnet-datepicker
```

## Requirements

React 18.2.0+

## Use
---

To use the date picker component, simply use the code bellow :
```js
    <DatePicker
        labelElement={"label"}
        nameElement={"name"}
        cssClass={"cssClass"}
    />
```

`label` is the name of label of the input that will show on the page
`name` is the name and id of the input
`cssClass`is the class added in all element in modal 

### Get value of the input

You can get the value of the input if you want to store this in database or other.
First initialise an useState for example :
```js
    const [inputData, setInputData] = useState([]);
```

And after call component with setter

```js
    <DatePicker
        labelElement={"label"}
        nameElement={"name"}
        cssClass={"cssClass"}
        returnValueSetter={setInputData}
    />
```

Then inputData have the value of input and the name of input with this type :
 ```
["valueOfInput", "nameOfInput]
```

### Type date picker

If you want the user to be unable to go to a later date or the opposite or both you can do this :

```js
    <DatePicker
        labelElement={"label"}
        nameElement={"name"}
        cssClass={"cssClass"}
        type={"before"}
    />
```

For `type` you can choice `before`, `after` or `all`

## Compatibility
---

The date picker component has been tested and is compatible with React 18 and newer versions. This component has not been tested on older versions, it may not work properly with them.