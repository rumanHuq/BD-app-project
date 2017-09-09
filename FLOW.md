1. manifest flow
```
flow init // will generate .flowconfig
```

2. install [**flow-typed**](https://github.com/flowtype/flow-typed)

3. install [**flow-bin**](https://github.com/flowtype/flow-bin).  /* will check the local version of flow, low-level */

4. pull definition files for local dependencies by running:
```
flow-typed install
``` 

If for any reason any flow-injected library has flow related errors, we can safely ignore those {library/package/module}(s) from flow check
by going to .flowconfig and running 
````
[ignore]
<PROJECT_ROOT>/node_modules/PACKAGE/*
````

All the events are type-checked with **KeyboardEvent or SyntheticKeyboardEvent**
if e.target is input the type-check with **HTMLInputElement**


If there are no type definition for any module e.g. ```module.hot```
then you can create custom type definition for that module
1. go into flow-typed directory, and create ```types.js```
2. 
````
// eg. for react hot module
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
}
````

we can also provide global type definition for any props, by including/declaring the types
in the same **/flow-typed/types.js**
```
export type VARNAME= {props1: string, props2: object, props3: function}
```

Sometimes some props needs to validated which may or maynot exist primarily. we should provide
default value for those props
```
CLASSNAME.defaultProps = {
  props1: bool, // if conditional
  props2: function noop(){}, // if a function
  props3: '' //if string
}
```

and pass it as maybe-type(appending with '?') in prop-types param
```
SomeFunc(props: {props1?: boolean})
```

## For Redux
---
1. declare types for **_actiontypes_**
It has to be literal action-type STRING defined in action creators

 in ```PROJECT_ROOT/flow-typed/typed.js```
````
define type ActionType= "FETCH_DATA"
````
2. declare generic Action architecture. It behaves similar fashion as a function/class. 
````
declare type ActionT<A:Action, P> = {
  |
    type: A,
    payload: {
      data: P
    }
  |
}
````
3. This architecture can be instantiated and exported for typeCheck as "Action" as similar fashion as checking for STRING/FUNCTION typechecking

````
export type Action = ActionT<'FETCH_DATA', Object>
````

### Brian Holts' Lecture 75 covers a good detail 