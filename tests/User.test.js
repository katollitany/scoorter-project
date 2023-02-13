const User = require('../src/User')

// User tests here

describe('User tests', () => {
// testing if they're a user
    const testUser = new User("Litany","couch123",28)

    // Uset setup

    // test username
    test("user has a username", () => {
        expect(testUser.username).toEqual("Litany");
    })
    // test password
    test("user has a password", () => {
        expect(testUser.password).toEqual("couch123");
    })

    // test age
    test("user has an age", () => {
        expect(testUser.age).toEqual(28);
    })
    
    // test loggedIn
    test("A user is not logged in when they first register", () => {
        expect(testUser.loggedIn).toEqual(false);
    })

    // User actions

    // test login
    test("A user is logged in with incorrect password", () => {
        expect(() => testUser.login(123)).toThrow(new Error("incorrect password"));
    })

    test("A user is logged in with correct password", () => {
        testUser.login("couch123")
        expect(testUser.loggedIn).toEqual(true);
    })

    // test logout
    test("A user is logged out", () => {
        testUser.logout()
        expect(testUser.loggedIn).toEqual(false);
    })

})