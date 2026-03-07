import type {FamilyType} from "./list.ts";

const API_URL = "http://localhost:8080/";

const  response: Response = await fetch(API_URL, {
    method: 'GET',
})

if (!response.ok) {
    throw new Error(response.statusText);
}

const data = await response.json() as FamilyType[];

data.forEach(family => {
    console.log(family.name);
})