## Props

| name | description | type | default value |
| :--: | :--: | :--: | :--: |
| url | url | String | -  |
| options | options | Object | `{}` |
| http | http | String | - |
| defaultData | defaultData | * | - |
| loop | loop | Boolean | `false` |
| delay | delay | Boolean | `false` |
| immediate | immediate | Boolean | `false` |
| manual | manual | Boolean | `false` |

## Events
| name | description | params |
| :--: | :--: | :--: | :--: |
| onerror | onerror | `error`  |
| onsuccess | onsuccess | `data` |
| oncomplete | oncomplete | `data` |

## Scoped props
| name | description | type | default value |
| :--: | :--: | :--: | :--: |
| data | data | * | - |
| error | error | * | - |
| $load | load data | Function | function |
| $poll | polling | Function | function |
