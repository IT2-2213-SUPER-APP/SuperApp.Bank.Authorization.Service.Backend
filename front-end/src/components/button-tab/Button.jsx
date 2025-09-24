import './Button.css'
export default function Button( { children, onClick, isActive, type} ) {

  if (type == 'submit'){
    return <button type = 'submit'>{children}</button>
  }
  return <button className = { isActive ? 'tab active' : 'tab' } onClick={onClick} > {children} </button>;

}