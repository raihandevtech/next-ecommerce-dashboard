import React from 'react'

function Breadcrumbs() {
  return (
    <div className='_breadcrumbs_wrap'>
        <h2 className="_page_title">Dashboard</h2>
        <ul className="_breadcrumbs_dir">
            <li className="_breadcrumbs_item">
                <a href="#0" className="_breadcrumbs_item_link">Dashboard</a>
            </li>
            <li className="_breadcrumbs_item">
                <a href="#0" className="_breadcrumbs_item_link">Dashboard</a>
            </li>
            <li className="_breadcrumbs_item">
                Dashboard
            </li>
        </ul>
    </div>
  )
}

export default Breadcrumbs;