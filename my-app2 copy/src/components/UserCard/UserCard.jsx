import './user-card.scss';
import userImg from '../../assets/images/image-victor.jpg';

const UserCard = (props) => {
    return (
        <div className="user-card">
            <div className="user-card__info">
                <img className='user-card__img' src={props.userImg} alt="Victor" />
                <div className="user-card__user">
                    <h3 className="user-card__name">{props.userName}</h3>
                    <span className="user-card__age">{props.userAge}</span>
                </div>
                <p className="user-card__location">{props.userLocation}</p>

                <div className="user-card__stat">
                    <div className="user-card__stat-inner">
                        <div className="user-card__item">
                            <p className="user-card__stat-count">{props.userFollowers}</p>
                            <span className="user-card__stat-descr">Followers</span>
                        </div>
                        <div className="user-card__item">
                            <p className="user-card__stat-count">{props.userLikes}</p>
                            <span className="user-card__stat-descr">Likes</span>
                        </div>
                        <div className="user-card__item">
                            <p className="user-card__stat-count">{props.userPhotos}</p>
                            <span className="user-card__stat-descr">Photos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;