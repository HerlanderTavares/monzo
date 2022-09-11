import {useContext} from 'react';
import styles from '../css/Favourites.module.scss';
import {css, checkProp} from '../../../helpers';
import IconCircle from '../../../1-UI/reusable/js/IconCircle';
import ItemBar from '../../../1-UI/reusable/js/ItemBar';
import PayState from '../../payState';
import State from '../../../0-API/state';

export default function Favourites(props) {
  const state = useContext(State);
  const payState = useContext(PayState);
  const favContacts = state.user.contacts.favourites;
  const dummyContacts = state.user.contacts.dummy;
  const iconSize = 4.5;
  const fontSize = iconSize / 2.75;

  const openForm = contact => {
    payState.setTransaction(prevState => {
      return {
        ...prevState,
        firstName: contact.firstName,
        lastName: contact.lastName,
        sortCode: contact.account.sortCode.split('-').join(''),
        accountNum: contact.account.accountNum,
      };
    });

    payState.setScreen('form');
  };

  const favourites = favContacts.map((contact, i) => {
    return (
      <div key={i} className={css(styles, 'favourites__contact')}>
        <IconCircle
          element="button"
          size={iconSize}
          font={fontSize}
          onClick={() => openForm(contact)}
        >
          {contact.account.initials}
        </IconCircle>
        <span>{contact.firstName}</span>
      </div>
    );
  });

  const dummy = dummyContacts.map((contact, i) => {
    return (
      <div key={i} className={css(styles, 'favourites__contact', 'dummy')}>
        <IconCircle element="button" size={iconSize} font={fontSize} disabled={true}>
          {contact[0]}
        </IconCircle>
        <span>{contact}</span>
      </div>
    );
  });

  return (
    <div className={css(styles, 'favourites')}>
      <span className={css(styles, 'pay__subheading')}>Favourites</span>
      <ItemBar element="div" ver="center" hor="space-between" ar="1 / 0.36">
        {favourites}
        {dummy}
      </ItemBar>
    </div>
  );
}
