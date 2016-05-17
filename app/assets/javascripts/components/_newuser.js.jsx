var NewUser = React.createClass({
    handleClick() {
        var username = this.refs.username.value;
        $.ajax({
            url: '/api/v1/users.json',
            type: 'POST',
            data: { user: {username: username} },
            success: (user) => {
                this.props.handleSubmit(user);
            }
        });
    },
    render() {
        return (
            <div>
                <h1>new user</h1>
                <input ref='username' placeholder='Github Login' />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});
