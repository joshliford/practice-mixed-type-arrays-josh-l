/*
Create a program to store and display user profiles for a basic application. Your
program should store and display one profile that contains the following:
- User name
- Age
- Subscription status
- User’s location
- User’s hobbies (at least two)
Complete the following tasks in order to create the program:

Task 1: Create the Profile. Write code to create a profile array containing the
required elements. Fill the array with data for one fictional user profile. Remember
to include all the elements (user name, age, subscription status, user’s location,
user’s hobbies).

Task 2: Access and Log Profile Details. Use console.log() to access and display
the following:
- The user’s name.
- The second hobby from the hobbies array.

Task 3: Modify the Profile. Make the following updates:
- Update the user’s age to a new value.
- Add a new hobby to the hobbies array.

Task 4: Display the Updated Profile. Log the entire updated profile to verify the
changes.
*/

// Task 1: Create the profile
let userProfile = ["Kratos", 36, true, {location: "Midgard"}, ["Fighting", "Training", "Hunting"]];

// Task 2: Display user's name and the 2nd hobby from the array list
console.log(userProfile[0], userProfile[4][1]);

// Task 3: Modify the profile
let updatedUserProfile = ["Kratos", 37, true, {location: "Midgard"}, ["Fighting", "Training", "Hunting", "Weapon Crafting"]];

// Task 4: Display updated profile
console.log(updatedUserProfile);
