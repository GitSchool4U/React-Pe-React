# React Memo

- HOC (component -> HOC -> enhanced component)
- React.memo shallow comparison karta hai, isliye reference stability bahut important hai (useState, useMemo, useCallback)

# primitive datatypes

    Number
    String
    undefined
    Boolean
    null

# reference type

    object
    array
    fucntion


# Quick Recap

- parent jab jab render hota hai, child bhi render hota hai, bhale hi child kitna bhi expensive ho react ko koi fark nahi padta

- ye wala nature ham react memo ka use karke fix kar skte hai

- react memo ek HOC hota hai apne andar ek component leta hai and ek enhance component return karta hai

- by default ye primitive values ke sath proper tarike se work karta hai aur unnecessary rerender ko rokta hai, lekin reference kype ke sath ye expected tarike se work nahi karta (yha pe ye shallo comparision karta hai), kyunki jab jab rerender hota hai nya reference ban jata hai

- reference stability ke liye hamlog usestate, useMemo, and useCallback ka use kar skte hai

- conclusion ye hai ki, react memo mast kam karta hai lekin, ye jyada effective usememo and usecallback ke sath hota hai

- that means react memo, useMemo, useCallback ka use karke react me jyada optimizations ki ja skti hai.....