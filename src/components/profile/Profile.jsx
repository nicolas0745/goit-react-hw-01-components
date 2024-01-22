import css from './Profile.module.css';
function formatNumber(numero) {
  if (numero > 1000) {
    let stringNumber = numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return stringNumber;
  } else {
    return numero.toString();
  }
}
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{formatNumber(stats.followers)}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{formatNumber(stats.views)}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{formatNumber(stats.likes)}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;