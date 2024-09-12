import './user-card.scss';
import userImg from '../../assets/images/image-victor.jpg';

const userCard = () => {
    return (
        <div className="user-card">
            <div className="user-card__info">
                <img className='user-card__img' src={userImg} alt="Victor" />
                <div className="user-card__user">
                    <h3 className="user-card__name">Bektur Zhamalbekov</h3>
                    <span className="user-card__age">18</span>
                </div>
                <p className="user-card__location">Bishkek</p>

                <div className="user-card__stat">
                    <div className="user-card__stat-inner">
                        <div className="user-card__item">
                            <p className="user-card__stat-count">100k</p>
                            <span className="user-card__stat-descr">Followers</span>
                        </div>
                        <div className="user-card__item">
                            <p className="user-card__stat-count">100k</p>
                            <span className="user-card__stat-descr">Likes</span>
                        </div>
                        <div className="user-card__item">
                            <p className="user-card__stat-count">100k</p>
                            <span className="user-card__stat-descr">Photos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default userCard;