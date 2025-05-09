import React from 'react';
import Link from 'next/link';

export default function Sidebar({ active, setActive }) {
  const sidebarItems = [
    { title: 'TESDA JAVA NCIII', content: 'PDF preview and description of TESDA JAVA NCIII' },
    { title: 'DEVARTHA', content: 'PDF preview and description of DEVARTHA' },
    { title: 'FIND OMO', content: 'PDF preview and description of FIND OMO' },
  ];

  return (
    <div className="w-full lg:w-1/3 space-y-6">
      <div className="text-lg font-semibold text-white">Sidebar Navigation</div>
      <nav>
        {sidebarItems.map((item) => (
          <Link
            key={item.title}
            href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            className={`block py-2 text-sm font-medium transition-all ${active === item.title ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActive(item.title)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
