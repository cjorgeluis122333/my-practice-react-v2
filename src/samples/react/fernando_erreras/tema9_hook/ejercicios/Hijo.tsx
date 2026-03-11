import * as React from "react";

interface HijoParams {
    numero: number,
    incrementar: (number: number) => void,
}

export const Hijo = React.memo(({numero, incrementar}: HijoParams) => {

        console.log('  Me volví a generar :(  ');

        return (
            <button
                className="btn btn-primary mr-3"
                onClick={() => incrementar(numero)}
            >
                {numero}
            </button>
        )
    }
)