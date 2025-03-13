import apple_icon from '../../assets/img/apple.svg'
import google_icon from '../../assets/img/google.svg'
import x_icon from '../../assets/img/x.svg'

import styles from './Apps.module.css'

const Apps = () => {
    return (
        <div className={styles.appsBox}>
            <div className={styles.app}>
                <img src={apple_icon} alt="Apple Logo" />
            </div>
            <div className={styles.app}>
                <img src={google_icon} alt="Google Logo" />
            </div>
            <div className={styles.app}>
                <img src={x_icon} alt="X Logo" />
            </div>
        </div>
    )
}

export default Apps;