export type Action = {
    type: string,
    payload: string
}


export const addToDo = (toDo: string): Action => ({

    type: 'ADD_TO_DO',
    payload: toDo
})


export const setToDo = (toDo: string):Action => ({

        type: 'SET_TO_DO',
        payload: toDo

})