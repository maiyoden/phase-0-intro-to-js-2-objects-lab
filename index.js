// Write your solution in this file!
// Step 1: Create the employee object
const employee = {
    name: "Denis Maiyo",
    streetAddress: "123 Main St"
};

// Step 2: Function to update employee without mutating
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, // Spread the existing employee properties
        [key]: value // Update the specified key with the new value
    };
}

// Step 3: Function to update employee with mutation
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Mutate the original employee object
    return employee; // Return the mutated object
}

// Step 4: Function to delete a key without mutating
function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; // Destructure to omit the key
    return newEmployee; // Return the new object without the specified key
}

// Step 5: Function to delete a key with mutation
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutate the original employee object
    return employee; // Return the mutated object
}