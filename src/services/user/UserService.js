import { dispatch, useGlobalState } from "../Store";

const sampleUsers = [
    {
        id: 1,
        name: "Paul",
        username: "PassionatePaul"
    },
    {
        id: 2,
        name: "John",
        username: "PrinceJohn"
    },
    {
        id: 3,
        name: "Lorraine",
        username: "QuicheLorraine"
    },
    {
        id: 4,
        name: "Joan",
        username: "Joanofarc"
    },
    {
        id: 5,
        name: "Marian",
        username: "MaidMarian"
    }
];

class UserService {
    constructor() {
        this.useService = this.useService.bind(this);
        this.users = [...sampleUsers];
        this.actions = {
            fetchUsers: this.fetchItems.bind(this),
            refetchUsers: () => this.fetchItems(this.fetchOptions),
            addUser: this.addItem.bind(this),
            editUser: this.editItem.bind(this),
            createUser: this.createItem.bind(this),
            readUser: this.readItem.bind(this),
            updateUser: this.updateItem.bind(this),
            deleteUser: this.deleteItem.bind(this),
            afterChange: this.afterChange.bind(this),
            mode: this.mode,
        }
    }

    useService() {
        const [state] = useGlobalState("user");
        this.state = state;
        return {...state, ...this.actions};
    }

    async fetchItems(options) {
        dispatch({type: "fetching"});
        try {
            const response = await this.fetchData(options);
            this.fetchOptions = options;
            dispatch({type: "fetched", users: response.data});
        } catch (e) {
            dispatch({type: "error", error: e});
        }
    }

    fetchData(options) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = {
                    data: this.users
                };
                (options === "error")? reject(options) : resolve(response)
            }, 750);
        })
    }

    async readItem(id, options) {
        dispatch({type: "reading"});
        try {
            const response = await this.readData(id, options);
            dispatch({type: "read", id, user: response.data});
        } catch (e) {
            dispatch({type: "error", error: e});
        }
    }

    readData(id, options) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = this.users.find(current => current.id === id)
                const response = {
                    data: user
                };
                (options === "error")? reject(options) : resolve(response)
            }, 100);
        })
    }

    async addItem() {
        this.mode.setAdd();
    }

    async editItem(id, options) {
        await this.readItem(id, options);
        this.mode.setEdit();
    }

    async createItem(options) {
        dispatch({type: "creating"});
        try {
            const response = await this.createData(options);
            dispatch({type: "created", user: response.data});
            this.afterChange("created");
        } catch (e) {
            this.reportError(e);
        }
    }

    createData(options) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const {data} = options;
                const user = data;
                user.id = this.users.length + 1;
                this.users.unshift(user);
                const response = {
                    data: user
                };
                (options === "error")? reject(options) : resolve(response)
            }, 750);
        })
    }

    async updateItem(id, options) {
        dispatch({type: "updating"});
        try {
            const response = await this.updateData(id, options);
            dispatch({type: "updated", id, user: response.data});
            this.afterChange("updated");
        } catch (e) {
            this.reportError(e);
        }
    }

    updateData(id, options) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const {data} = options;
                const user = data;
                this.users = this.users.map(current => (current.id === id)? user : current);
                console.log(this.users.length)
                const response = {
                    data: user
                };
                (options === "error")? reject(options) : resolve(response)
            }, 100);
        })
    }

    async deleteItem(id, options) {
        dispatch({type: "deleting"});
        try {
            const response = await this.deleteData(id, options);
            dispatch({type: "deleted", id, user: response.data});
            this.afterChange("deleted");
        } catch (e) {
            this.reportError(e);
        }
    }

    deleteData(id, options) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.users = this.users.filter(current => (current.id !== id));
                const response = {
                    id: id
                };
                (options === "error")? reject(options) : resolve(response)
            }, 100);
        })
    }

    afterChange(eventType) {
        this.mode.setInitial();
        this.actions.refetchUsers();
    }

    mode = {
        isAdd: () => this.state.mode === "add",
        setAdd: () => dispatch({type: "mode", mode: "add"}),
        isEdit: () => this.state.mode === "edit",
        setEdit: () => dispatch({type: "mode", mode: "edit"}),
        isInitial: () => this.state.mode === "initial",
        setInitial: () => dispatch({type: "mode", mode: "initial"}),
    }

    reportError(e) {
        const message = e.message || "unknown error";
        const statusText = (e && e.response && e.response.statusText) || "";
        const detailedMessage = (e && e.response && e.response.data) || e.stack || e;
        dispatch({type: "error", error: `${message} ${statusText}`});
        console.error("Error:", detailedMessage);
    }
}
const {useService} = new UserService();
export default useService;
