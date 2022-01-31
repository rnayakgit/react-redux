export default function isLogged(state = false, action) {
    console.log('Auth/isLogged Reducer Hooked..!!');
    switch (action.type) {
        case 'SIGN_IN': {

            return {
                state: true
            }
        }
        default:
            return state
    }
}