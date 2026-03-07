const enum ERROR_TYPE {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN,
}


function showErrorMesage(error:ERROR_TYPE ) {
    if (error === ERROR_TYPE.NOT_FOUND) {
        console.log('The resource was not found.');
    }else if (error === ERROR_TYPE.UNAUTHORIZED) {
        console.log('The user is unauthorized.');
    }else if (error === ERROR_TYPE.FORBIDDEN) {
        console.log('The resource was forbidden.');
    }
}


showErrorMesage(ERROR_TYPE.NOT_FOUND)