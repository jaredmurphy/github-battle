var Body = React.createClass({
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
        console.log(this)

    },
    render() {
        return (
            <div>
                < NewUser handleSubmit={this.handleSubmit} />
                < TopUsers users={this.state.users} />
            </div>
        )
    }
});
