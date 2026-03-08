import {useFamily} from "./hook/useFamilly.ts";
import {FamilyCard} from "./component/FamiliCard.tsx";

export const FamilyList = () => {

    const {data, isLoading} = useFamily()

    return (
        <>
            {/*Loading*/}
            {isLoading && <div>Loading...</div>}
            {/*Show Message*/}
            {data && data.length > 0 && (
                <div>
                    <h2>Users</h2>
                    <ul>
                        {
                            data.map((item, index) => (
                                    <FamilyCard user={item} key={index}/>
                                )
                            )
                        }
                    </ul>
                </div>
            )

            }
        </>
    )


}