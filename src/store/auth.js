const auth = ({
    state: {
        token: localStorage.getItem('token') || '',
        user: {}
    },
    getters: {
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {

        async signup(_, data) {
            const res = fetch('http://localhost:8000/api/register', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await res.json();
            console.log(result);
        }
    },
})

export default auth;