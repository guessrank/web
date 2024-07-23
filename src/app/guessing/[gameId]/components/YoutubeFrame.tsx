import type { YoutubeFrameProps } from '@/types/props/YoutubeFrameProps'

export default function YoutubeFrame(props: YoutubeFrameProps): JSX.Element {
	return (
		<div className='flex items-center justify-center w-full sm:w-1/2'>
			<iframe
				src={props.url}
				allowFullScreen
				height={props.height ?? 320}
				loading='lazy'
				className='w-full'
				title={props.title}
				onLoad={props.onLoad}
				allow='accelerometer; 
                        autoplay; 
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture'
			/>
		</div>
	)
}
