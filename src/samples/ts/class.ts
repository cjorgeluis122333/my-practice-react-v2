export type GenderType = "female" | "male";

class AgeToMushException extends Error {

    constructor(message: string) {
        super(message);
    }
}

 class Animal{
    private _name: string;
    private _age: number;
    private _gender: GenderType;

    constructor(name: string, age: number, gender: GenderType) {
        if (age > 120)
            throw new AgeToMushException("Age must be bigger than 120");

        this._name = name;
        this._age = age;
        this._gender = gender;

    }

    get isOld(): boolean {
        return this._age >= 10;
    }


    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    get gender(): GenderType {
        return this._gender;
    }

    set name(value: string) {
        this._name = value;
    }

    set age(value: number) {
        this._age = value;
    }

    set gender(value: GenderType) {
        this._gender = value;
    }

}

let dog: Animal| null = null
try {
    dog = new Animal("Pepe", 313, "female")
}catch(err: AgeToMushException) {
    console.log(`${err.message}`);
}

console.log(dog)