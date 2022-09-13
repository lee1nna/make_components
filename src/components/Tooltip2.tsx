import {useState} from "react";

interface TooltipType {
    TooltipImg: string,
    TooltipWidth: string,
    TooltipHeight: string,
    TooltipMsg: string,
    TooltipBorder?: string,
    TooltipBgCol?: string,
    TooltipFontCol?: string,
    TooltipBorderRadius?: string
}

function Tooltip2({TooltipImg, TooltipWidth, TooltipHeight, TooltipMsg, TooltipBorder, TooltipFontCol, TooltipBorderRadius, TooltipBgCol}: TooltipType) {
    let [tooltipState, setTooltipState] = useState(false)
    return (
        <div className="tooltip2_wrap">
            <img src={TooltipImg} alt="" style={{width: TooltipWidth, height: TooltipHeight}} onMouseEnter={() => { setTooltipState(true) }} onMouseLeave={() => { setTooltipState(false)}}/>
            <div>
                {
                    tooltipState? <span className='tooltip2_text' style={{border: TooltipBorder, borderRadius: TooltipBorderRadius}}>{TooltipMsg}</span>: ''
                }
            </div>
        </div>
    )
}

export default Tooltip2