// Data type
import type {FamilyCategoryType} from "./types.ts";

export interface FamilyType {
    name: string,
    age: number,
    category: FamilyCategoryType
}
export interface PersonType {
    name: string,
    age: number
    familiars: FamilyType[]
}
//

// List of person
export const personsList: PersonType[] = [
    {
        name: 'Pepe',
        age: 31,
        familiars: [
            {name: 'John', age: 53, category: "Padre"},
            {name: 'Ana', age: 53, category: "Madre"},
            {name: 'Lucas', age: 73, category: "Abuelo"},
        ]

    },
    {
        name: 'John',
        age: 32,
        familiars: [
            {name: 'Carlos', age: 53, category: "Padre"},
            {name: 'Diana', age: 53, category: "Madre"},
            {name: 'Erica', age: 73, category: "Abuela"},
        ]
    },
    {
        name: 'Jane',
        age: 33,
        familiars: [
            {name: 'Fabian', age: 53, category: "Padre"},
            {name: "Heidi", age: 53, category: "Madre"},
            {name: 'Iban', age: 73, category: "Abuelo"},
        ]
    }
]

//Show a list of person
personsList.forEach(person => {
    console.log(person)
})
