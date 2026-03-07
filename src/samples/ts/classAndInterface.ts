import type {GenderType} from "./class.ts";

interface IAnimal {
    name: string;
    age: number;
    gender: GenderType;
}

interface IDog extends IAnimal {
    skin: string;
    onWalk: () => void;
    onTalk: () => void;
}

class Dog implements IDog {
    private _age: number;
    private _gender: GenderType;
    private _name: string;
    private _skin: string;

    constructor(age: number, gender: GenderType, name: string, skin: string) {
        this._age = age;
        this._gender = gender;
        this._name = name;
        this._skin = skin;
    }





    onTalk(): void {
        console.log(`My name is ${this.name} and I TALK like a dog`);
    }

    onWalk(): void {
        console.log(`My name is ${this.name} and I WALK like a dog`);
    }


    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get gender(): GenderType {
        return this._gender;
    }

    set gender(value: GenderType) {
        this._gender = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get skin(): string {
        return this._skin;
    }

    set skin(value: string) {
        this._skin = value;
    }
}

const dog: IDog = new Dog(1, "female", "name", "withe")

console.log(dog);