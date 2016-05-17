var Body = React.createClass({
    handleDelete(id) {
        $.ajax({
            url: `/api/v1/users/${id}.json`,
            type: 'DELETE', 
            success: () => {
                this.removeUserClient(id);
            }
        });
    },
    removeUserClient(id) {
        var newUsers = this.state.users.filter((user) => {
            return user.id != id;
        });

        this.setState({ users: newUsers });
    },
    getInitialState() {
        return { users: [] }
    },
    componentDidMount() {
        $.getJSON('/api/v1/users.json', 
            (response) => { 
                this.setState({ users: response }) 
            })
    },
    handleSubmit(user) {
        var newState = this.state.users.concat(user);
        this.setState({ users: newState })
        //console.log(this)

    },
    render() {
        return (
            <div>
                < NewUser handleSubmit={this.handleSubmit} />
                < TopUsers users={this.state.users} handleDelete={this.handleDelete}/>
            </div>
        )
    }
});
