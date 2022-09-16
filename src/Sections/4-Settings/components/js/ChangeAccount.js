import {useContext} from 'react';
import styles from '../css/Account.module.scss';
import {css, formatNumber} from '../../../helpers';
import {Button} from './Account';
import {users} from '../../../0-API/accounts';
import State from '../../../0-API/state';
import {getStorage} from '../../../0-API/storage';

export default function ChangeAccount() {
  const state = useContext(State);

  const allUsers = [];

  const switchUser = e => {
    state.setLoading(2);
    state.setUser(e.target.dataset.btn);
    state.setScreen('home');
  };

  for (const user in users) {
    const userAcc = users[user];

    const amount = getStorage(userAcc, 'balance') || userAcc.balance;
    const account = (
      <Button
        key={user}
        data={user}
        label={userAcc.fullName}
        amount={formatNumber(amount)}
        onClick={switchUser}
      />
    );

    allUsers.push(account);
  }

  return (
    <div className={css(styles, 'account__block', 'change')}>
      {allUsers}
      <Button
        label="Joint Account"
        amount={formatNumber(46962.28)}
        disabled={true}
        color="#d9d9d9"
      />
    </div>
  );
}
