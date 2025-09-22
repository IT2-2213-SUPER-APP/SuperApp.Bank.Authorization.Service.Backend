import './Button.css'
export default function Button( { children, onClick, isActive } ) {

  return <button className = { isActive ? 'tab active' : 'tab' } onClick={onClick} > {children} </button>;

}