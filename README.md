# Project-HashMap
HashTable Implementation in JavaScript
Overview
This HashTable class implements a basic hash table (or hash map) in JavaScript, providing methods for adding, retrieving, checking existence, removing key-value pairs, and managing the collection of keys and values.

Features
Hash Function: Uses a polynomial rolling hash function to calculate indices.
Dynamic Resizing: Automatically manages load factor (not yet implemented in this version).
Key Methods:
set(key, value): Adds a key-value pair.
get(key): Retrieves the value for a given key.
has(key): Checks if the key exists in the hash table.
remove(key): Removes the key-value pair.
length(): Returns the number of stored elements.
clear(): Clears the hash table.
keys(): Returns an array of all keys.
val(): Returns an array of all values.
entries(): Returns an array of all key-value pairs.
