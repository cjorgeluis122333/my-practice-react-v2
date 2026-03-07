// ================================ Type with regex

type IdType = `${string}-${string}-${string}-${string}-${string}`
const id: IdType = crypto.randomUUID()
console.log(id)

// ================================  Types like enum

export type FamilyCategoryType = "Padre" | "Abuelo" | "Abuela" | 'Madre'

// ================================ Union Types
export type FamilyInfoType = {
    name: string,
    age: number
}

export type FamilyType = {
    category: FamilyCategoryType
}

export type CompletePersonalInfo = FamilyInfoType & FamilyType //Here you make a union between to Type and create a new type

const familyData: CompletePersonalInfo[] = [{
    name: "",
    age: 3,
    category: "Abuelo"

}]
familyData.forEach((item) => {
    console.log(item)
})


// ================================ Extract type form other type
export type Location = {
    city: string,
    country: string,
    address: {
        street: string,
        number: number
    },
    position: {
        x: number,
        y: number
    }
}

type Address = Location["address"]  //You can create a type from params of other type

const addresses: Address = {
    street: "",
    number: 0,
}

console.log(addresses)



