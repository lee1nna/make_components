import tooltip from '../assets/image/ico_tooltip.png'

function Tooltip() {
    return (
        <div className='tooltip_text' data-tooltip-text="이것은 툴팁입니다. css 만으로도 이렇게 간단한 툴팁을 만들 수 있습니다.">
            <div className='tooltip_wrap'>
                <img className='tooltip_img' src={tooltip} alt=""/>
            </div>
        </div>
    )
}

export default Tooltip