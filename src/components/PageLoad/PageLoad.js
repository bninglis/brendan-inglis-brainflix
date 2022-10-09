import loadingIcon from '../../assets/images/sync_FILL0_wght400_GRAD0_opsz48.svg';
import './PageLoad.scss'

export default function PageLoad() {
    return(
        <div className="loading">
            <img className="loading__image" src={loadingIcon} alt="loading icon" />
            <h1>We're just getting things ready for you...</h1>
        </div>
    )
}