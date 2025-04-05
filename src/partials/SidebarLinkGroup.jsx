import React, { useState } from 'react';

function SidebarLinkGroup({ children, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${open ? 'bg-slate-900' : ''}`}>
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;
