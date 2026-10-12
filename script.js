// Test Suite / Validation Script for Interactive Button
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");

    // Test 1: Verify element exists in DOM
    if (button) {
        console.log("Test Passed: Button element successfully found in DOM.");
    } else {
        console.error("Test Failed: Button element not found.");
    }

    // Test 2: Verify click event listener & interactivity
    button.addEventListener("click", () => {
        console.log("Test Passed: Button click event triggered successfully.");
        alert("Button was clicked! Interaction test successful.");
    });
});