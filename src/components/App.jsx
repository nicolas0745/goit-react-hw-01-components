import Profile from './profile/Profile';
import userData from './profile/user.json';
import Statistics from './statistics/Statistics';
import statisticsData from './statistics/data.json';
import FriendList from './friendlist/FriendList';
import friends from './friendlist/friends.json';
import Transactions from './transactions/Transactions';
import transactionsData from './transactions/table.json';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        padding: '50px',
      }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload Stats" data={statisticsData} />
      <Statistics data={statisticsData} />
      <FriendList friends={friends} />
      <Transactions transactions={transactionsData} />
    </div>
  );
};
