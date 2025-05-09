import React from 'react';
import s from './ServiceProposeCard.module.css';
import Button from '../../Buttons/Button/Button.tsx';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {ServiceProposeType} from '../../../redux/slices/proposeSlice.ts';
type Props = {
	card: ServiceProposeType;
};
const ServiceProposeCard: React.FC<Props> = ({card}) => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<div className={s.containerInfo}>
				<div className={s.title}>{card.title}</div>
				<div className={s.price}>{card.price}</div>
				<div className={s.button}>
					<Link to={`${card.link}`}>
						<Button type={'button'} text={t('Order now')} />
					</Link>
				</div>
			</div>
			<div className={s.containerImage}>
				<div
					className={s.image}
					style={{backgroundImage: `url(${card.image})`}}
				>
					{/*<img src={card.image} alt={card.title} />*/}
				</div>
				{card.discount && <div className={s.discount}>{card.discount}</div>}
			</div>
		</div>
	);
};

export default ServiceProposeCard;
