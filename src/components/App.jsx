import data from '../data/data.json';
import profile from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/';
import { Statistics } from './Statistics/';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory/';
import classes from './App.module.css';

const { username, tag, location, avatar, stats } = profile;

export const App = () => {
  return (
    <div className={classes.container}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
