import type {FamilyType, PersonType} from "../../../ts/list.ts";

interface FamilyCardProps {
    user: PersonType
}

export const FamilyCard = ({user}: FamilyCardProps) => {

    return (<>
            <div style={{paddingTop: "10px", backgroundColor: "withe", border: "1px solid black", margin: "4px"}}>
                <div style={{paddingTop: "10px"}}>{user.name}</div>
                <div style={{paddingTop: "10px"}}>{user.age}</div>
                <div style={{paddingTop: "10px"}}>
                    <ul>
                        {
                            user.familiars.map((item, index) => (

                                <FamilyList name={item.name} category={item.category} age={item.age} key={index}/>

                            ))
                        }
                    </ul>
                </div>
            </div>

        </>

    )
}

export const FamilyList = ({name, age, category}: FamilyType) => {
    return (<>
        <h3>Family</h3>
        <div style={{paddingTop: "10px", backgroundColor: "withe", border: "1px solid black"}}>
            <div style={{paddingTop: "10px"}}>{name}</div>
            <div style={{paddingTop: "10px"}}>{age}</div>
            <div style={{paddingTop: "10px"}}>{category}</div>
        </div>
    </>)

}