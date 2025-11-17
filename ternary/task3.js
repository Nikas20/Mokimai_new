"use strict;"

function ternEvenOdd(num) {
    return num % 2 == 0 ? "Even" : "Odd"
}

function ages(age) {
    return age >= 18 ? "Adult" : "Minor"
}

function temperature(temp) {
    return temp > 30 ? "Hot" : "Cool"
}

function loginStatus(isLoggedIn) {
    return isLoggedIn == true ? "Welcome back!" : "Please log in"
}

function discountEligibility(discount) {
    return discount >= 100 ? "Discount applied" : "No discount"
}

function maxOfTwo(num1, num2) {
    return num1 > num2 ? `${num1} biger` : num1 < num2 ? `${num2} biger` : num1 == num2 ? "jie ligus" : "eror"
}

function validUsername(username) {
    return username.length >= 4 ? "Valid" : "Too short"
}

function name(number) {
    return number % 5 == 0 ? "Divisible" : "Not divisible"
}

function examResult(score) {
    return score >= 50 ? "Pass" : "Fail"
}

function mode(theme) {
    return theme == true ? "dark" : "light"
}