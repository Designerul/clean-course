(() => {

    // No aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';

    interface PersonProperties {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        constructor({ name, gender, birthdate }) {}
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/home/fernando',
        '/home/fernando/projects',
        'fernando@google.com',
        'admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings});

})();