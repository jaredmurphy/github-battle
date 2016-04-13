var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');


function UserDetails (user) {
  return (
    <div style={styles.unorderedList}>
      {!!user.score && <li><h3>Score: {user.score}</h3></li>}
      <li><img src={user.info.avatar_url} className="img-rounded img-response" style={styles.imageSize}/></li>
      <li>Username: {user.info.login}</li>
      {user.info.location && <li>Location: {user.info.location}</li>}
      {user.info.company && <li>Company: {user.info.company}</li>}
      <li>Followers: {user.info.followers}</li>
      <li> Following: {user.info.following}</li>
      <li>Public Repos: {user.info.public_repos}</li>
      {user.info.blog && <li>Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
  </div>
  )

}
     
UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  })
}

module.exports = UserDetails;
