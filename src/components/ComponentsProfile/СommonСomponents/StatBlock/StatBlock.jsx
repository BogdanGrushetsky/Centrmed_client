
import { ReactComponent as DollarIcon } from '../../../../icons/dollarIcon.svg';
import { ReactComponent as Watch } from '../../../../icons/watch.svg';
import './StatBlock.css'

export const StatBlock = ({ timeWork, blanceMoney }) => {


	return (
		<div className='StatBlock'>
			<div className='StatBlock__block' >
				<span>Відпрацьовані години</span>
				<span className='StatBlock__num'>
					<Watch className='EditProfile__svgStatik' /> {timeWork}
				</span>
			</div>
			<div className='StatBlock__block' >
				<span> Баланс</span>
				<div className='StatBlock__num'><DollarIcon className='EditProfile__svgStatik' /> <span>{blanceMoney} грн</span></div>
			</div>
		</div>
	)
}