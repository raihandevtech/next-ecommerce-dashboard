import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

function PageTop({ children }: LayoutProps): JSX.Element {
  return (
    <div className='_page_top_section'>
        <div className="_page_top_wrap">
            { children }
        </div>
    </div>
  )
}

export default PageTop;