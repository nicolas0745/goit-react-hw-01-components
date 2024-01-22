import css from './FrienList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <span className={css[friend.isOnline ? 'online' : 'offline']}></span>
          <img className={css.avatar} src={friend.avatar} alt={friend.name} />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
