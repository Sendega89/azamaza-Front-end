import React from 'react';
import s from './OurSubscriptions.module.css';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import header from '../../../../assets/images/referal header.png';
import {Link} from 'react-router-dom';
import ButtonsSelector from '../../../../components/Buttons/ButtonsSelector/ButtonsSelector.tsx';
import SubscriptionsCard from './components/SubscriptionsCard/SubscriptionsCard.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store.ts';
import {Mobile} from '../../../../assets/utils/responsive.tsx';

const OurSubscriptions: React.FC = () => {
	const {t} = useTranslation();
	const ourSubscriptionsData = useSelector(
		(state: RootState) => state.homePage.ourSubscriptions,
	);
	return (
		<div>
			<BlockHeader
				title={t('Our subscriptions')}
				description={t(
					'Travel, relax, communicate, meet, find friends, buy, rent, economize - do whatever you want with an Azamaza subscription',
				)}
			/>
			<Mobile>
				<div className={s.imageContainer}>
					<img src={header} alt="referal-header" loading="lazy" />
				</div>
			</Mobile>
			<div className={s.limitedOfferContainer}>
				<div className={s.limitedOfferHead}>
					<div className={s.limitedOfferTitle}>
						<Link to={`/limited-offer`}>{t('Limited Offer')}</Link>
					</div>
					<div className={s.limitedOfferDescription}>
						Special price only for the{' '}
						<Link to={'/limited-offer-counter'}>first 10,000</Link> subscribers
						who will receive unique bonuses and opportunities
					</div>
				</div>
				<div className={s.offerSelector}>
					<Mobile>
						<div className={s.offerSelectorTitle}>{t('Select Plan')}</div>
					</Mobile>
					<div className={s.offerSelectorButtons}>
						<ButtonsSelector />
					</div>
				</div>
				<div className={s.cardsContainer}>
					{ourSubscriptionsData.map((item, index) => (
						<SubscriptionsCard data={item} key={index + item.type} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OurSubscriptions;
