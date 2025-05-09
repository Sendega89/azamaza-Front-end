import React from 'react';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import s from './MostPopularServices.module.css';
import VerticalCard from '../../../../components/Cards/VerticalCard/VerticalCard.tsx';
import VerticalSlider from '../../../../components/Sliders/VerticalSlider/VerticalSlider.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store.ts';
import {useMediaQuery} from 'react-responsive';

const MostPopularServices: React.FC = () => {
	const mostPopularServices = useSelector(
		(state: RootState) => state.homePage.mostPopularService,
	);
	const {t} = useTranslation();
	const isMobile = useMediaQuery({maxWidth: 600});

	return (
		<div className={s.container}>
			<BlockHeader
				showMore={!isMobile}
				navigateButtons={!isMobile}
				title={t('The most popular services')}
				description={t(
					'Plan your trip easily and quickly, with the best and unique offers',
				)}
			/>
			<div className={s.cardsContainer}>
				<VerticalSlider autoplay={isMobile}>
					{mostPopularServices.map((service, index) => (
						<VerticalCard card={service} key={index + service.name} />
					))}
				</VerticalSlider>
			</div>
		</div>
	);
};

export default MostPopularServices;
