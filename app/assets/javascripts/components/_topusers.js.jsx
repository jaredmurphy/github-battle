var TopUsers = React.createClass({
    render() {
        var users = this.props.users.map((user) => {
            return (
                <div key={user.id}>
                    <h3>{user.username}</h3>
                    <p>{user.location}</p>
                    <img src={user.avatar_url} />
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

