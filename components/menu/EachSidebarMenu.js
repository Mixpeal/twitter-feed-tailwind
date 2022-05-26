function EachSidebarMenu({children, name, active}) {
    return (
        <li className="flex">
            <a href="" className="flex text-xl text-default-high hover:bg-bg-hover py-2 rounded-full px-4 items-center">
                {children}
                <span className={`ml-4 text-default-high ${active ? 'font-bold' : ''}`}>{name}</span>
            </a>
        </li>
    )
}
EachSidebarMenu.defaultProps = {
    active: false
}
    
export default EachSidebarMenu;