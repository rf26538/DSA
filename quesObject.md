🔹🔹🔹🔹🔹🔹 Objects Questions 🔹🔹🔹🔹

# Deep clone an object without using structuredClone or JSON.parse(JSON.stringify).

# Convert an object to a query string and vice versa.
{ name: "Rehan", age: 25 } → "name=Rehan&age=25"

# Flatten a nested object into a single level.
{ a: { b: { c: 1 } } } → { "a.b.c": 1 }

# Find keys with the highest value in an object.
{ a: 10, b: 20, c: 20 } → ["b", "c"]

# Implement a polyfill for Object.assign.
# Compare two objects deeply (check equality).
# Group an array of objects by multiple keys.
# Write a function to pick specific keys from an object.
pick({ a: 1, b: 2, c: 3 }, ["a", "c"]) → { a: 1, c: 3 }

# Deep freeze an object (make all nested props immutable).
# Convert array of objects to object by key.
[{id:1,name:"A"}, {id:2,name:"B"}] → {1:{...}, 2:{...}}

# Implement Promise.all polyfill.
# Write a function to merge two deeply nested objects.
# Convert nested object to a tree structure.
Input: ["a.b.c", "a.b.d", "x.y"]  
Output: { a: { b: { c:{}, d:{} }}, x:{ y:{} } }

# Design an LRU Cache in JavaScript (use Map or custom object).