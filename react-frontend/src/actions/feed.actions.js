

export const UPDATE_IMAGE_ARR = "updateImageArr";




export function updateImageArr(data) {
    console.log("action", data)
    return {
        type: UPDATE_IMAGE_ARR,
        data
    };
}
