// Завдання 1

// class User {
//     #name
//     constructor(name, login, age, password) {
//         this.#name = name,
//             this.login = login,
//             this.age = age
//         this.password = password
//     }
//     // Завдання 2
//     getName(isAdmin) {

//         if (isAdmin && this.#name === '') {
//             console.log('true, but your name is not listed.You login: ' + this.login)
//         }
//         if (isAdmin) {
//             console.log('true. Your name: ' + this.#name)
//         } else {
//             console.log('false. Your login: ' + this.login)
//         }

//     }
//     // Завдання 3
//     changeName(password) {
//         if (password === 123) {
//             console.log('Name changed from ' +  this.#name + ' to Bill')
//             this.#name  = 'Bill'
//             console.log(this.#name)
//         }
//         else{

//             console.log('Permission denied')
//         }

//     }

// }



// let user1 = new User('M', 'MK_18', 18, 123)
// let user2 = new User('', 'NRG', 22, 1000)
// // Результати
// console.log(user1.login)
// console.log(user1.age)

// console.log(user2.login)
// console.log(user2.age)

// console.log(user1.getName(true))
// console.log(user2.getName(true))
// console.log(user1.getName(false))

// console.log(user2.changeName(user2.password))
// console.log(user1.changeName(user1.password))
// let pass =Number( prompt('Enter you password:'))
// user1.changeName(pass)




// Завдання 4
// class User {
//     constructor(name, login, age) {
//         this.name = name,
//             this.login = login,
//             this.age = age
//     }
// }

// class Admin extends User {
//     #isAdmin
//     constructor(name, login, age, ) {
//         super(name, login, age)
//         this.#isAdmin = true
//     }
//     getUserName(arg) {
//         console.log(arg.name)
//     }
// }


// let user1 = new Admin('Vika', 'ADMIN', 25)
// console.log(user1.name)
// user1.getUserName(user1)
// Завдання 5 готово але  не переписано на foreach

class User {
    #phone
    constructor(name, phone) {
        this.name = name
        this.#phone = phone
    }

    getPhone(isAdmin) {
        if (isAdmin === true) {
            console.log(this.#phone)
        } else if (isAdmin === false) {
            const arv = this.#phone.split('-')
            console.log(arv)
            arv.splice(1, 2, '*****')
            let result = arv.join('-')
            console.log(result)
        }
    }

}

let user1 = new User('Mike', '067-888-88-99')
let user2 = new User('Tom', '099-888-88-99')

user1.getPhone(false);
user2.getPhone(false);
user1.getPhone(true);
user2.getPhone(true);