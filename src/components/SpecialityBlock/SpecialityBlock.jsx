


import './SpecialityBlock.css'

export const SpecialityBlock = ({ children, main, ...props }) => (<span {...props} className={`SpecialityBlock ${main && 'main'}`}>{children}</span>)