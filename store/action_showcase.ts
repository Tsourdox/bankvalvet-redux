// const typicalAction = { type: "DO_SOMETHING", payload: 1337 }

// const typicalThunkAction = (dispatch, getState) => {
//     dispatch({ type: "DO_SOMETHING", payload: 1337 })
// }


// const doSomethingActionCreator = (value) => {
//     if (!value) return { type: "DO_SOMETHING_ELSE" }
//     return { type: "DO_SOMETHING", payload: value }
// }

// const doSomethingThunkActionCreator = (value) => {
//     return async (dispatch, getState) => {
//         if (!value) {
//             dispatch({ type: "DO_SOMETHING_ELSE" })
//         } else {
//             dispatch({ type: "DO_SOMETHING", payload: value })
//         }
//     }
// }