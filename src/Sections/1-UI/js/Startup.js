import styles from '../css/Startup.module.scss';
import BarLoader from 'react-spinners/BarLoader';
const css = className => styles[className];

export default function Startup() {
  return (
    <div className={css('start-up')}>
      <div className={css('logo-container')}>
        <img src={require('../css/monzo_logo.png')} alt="monzo logo" className={css('logo')} />
        <span className={css('subtitle')}>Clone</span>
      </div>

      <BarLoader width={130} color="#f08080" cssOverride={{gridRow: 3}} />

      <span className={css('signature')}>By Herlander Tavares</span>
    </div>
  );
}
