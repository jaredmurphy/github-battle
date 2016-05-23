var NewUser = React.createClass({
    handleClick() {
        var username = this.refs.username.value;
        $.ajax({
            url: '/api/v1/users.json',
            type: 'POST',
            data: { user: {username: username} },
            error: (response) => {
                console.log('error from create attempt');
                console.log(response);
                if (response.status === 422) {
                    $.ajax({
                        url: '/api/v1/users/' + id + '.json',
                        type: 'PUT',
                        data: { user: {username: username}},
                        error: (response) => {
                            console.log('error from update attempt');
                        },
                        success: (user) => {
                            this.props.handleSubmit(user)
                        }
                    });
                } // ends 422 response
            },
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
