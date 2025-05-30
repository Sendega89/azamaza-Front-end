import React, {ReactNode} from 'react';
import {Autoplay, FreeMode} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useSwiperContext} from '../SwiperContext.tsx';

type Props = {
	children: ReactNode[] | ReactNode;
	maxWidth?: number;
	autoplay?: boolean;
	spaceBetween?: number;
	loop?: boolean;
};

const VerticalSlider: React.FC<Props> = ({
	children,
	autoplay,
	spaceBetween,
	maxWidth,
	loop = true,
}) => {
	const {setSwiper} = useSwiperContext();
	return (
		<div>
			<Swiper
				onSwiper={(swiper) => setSwiper(swiper)}
				/*centeredSlides={true}*/
				loop={loop}
				spaceBetween={spaceBetween ? spaceBetween : 20}
				slidesPerView={'auto'}
				modules={[Autoplay, FreeMode]}
				watchOverflow={true}
				className={'sliderWithPagination'}
				pagination={{clickable: true}}
				freeMode={true}
				autoplay={
					autoplay && {
						delay: 0,
						disableOnInteraction: false,
					}
				}
				speed={6000}
			>
				{React.Children.map(children, (child, index) => (
					<SwiperSlide key={index} style={{maxWidth: maxWidth ?? 236}}>
						{child}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default VerticalSlider;
