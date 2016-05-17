var TopUsers = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    render() {
        var users = this.props.users.map((user) => {
            return (
                <div key={user.id}>

                    <h3>{user.username} {user.id}</h3>
                    <p>{user.location}</p>
                    <img src={user.avatar_url} />
                    <button onClick={this.handleDelete.bind(this, user.id)} >Delete </button>
                </div>
            )
        });

        return(
            <div>
                { users }
            </div>
        )
    }

});

