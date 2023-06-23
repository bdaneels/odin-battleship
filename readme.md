Things Learned:

Difference between export and export default
array.find method returns the found object
array.some method returns a boolean
you can nest the array functions to do a deeper search, like searching for variables in an array of arrays; or object value-keys in objects of objects.
I seemed to make the same mistake again as with the to-do project. Reading the data attribute returns a string. If you check it against a key or value from an object or anything else for that matter; that is an int. You are making a type error, which flies under the radar. 
