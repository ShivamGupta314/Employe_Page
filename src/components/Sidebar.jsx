// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { X, Home, Briefcase, CheckSquare, Users, BarChart2, Settings } from 'lucide-react'
// import { Button } from "./ui/button"

// const menuItems = [
//   { icon: Home, label: 'Dashboard', path: '/' },
//   { icon: Briefcase, label: 'Projects', path: '/projects' },
//   { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
//   { icon: Users, label: 'Team', path: '/team' },
//   { icon: BarChart2, label: 'Analytics', path: '/analytics' },
// //   { icon: Settings, label: 'Settings', path: '/settings' },
// ]

// export function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
//   const location = useLocation()

//   return (
//     <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-background border-r p-4 transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static`}>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-bold">Menu</h2>
//         <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
//           <X className="h-6 w-6" />
//         </Button>
//       </div>
//       <nav>
//         <ul className="space-y-2">
//           {menuItems.map((item) => (
//             <li key={item.label}>
//               <Link to={item.path}>
//                 <Button
//                   variant="ghost"
//                   className={`w-full justify-start ${location.pathname === item.path ? 'bg-accent' : ''}`}
//                 >
//                   <item.icon className="mr-2 h-4 w-4" />
//                   {item.label}
//                 </Button>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   )
// }

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Home, Briefcase, CheckSquare, Users, BarChart2, Calendar } from 'lucide-react';
import { Button } from "./ui/button";

const sidebarItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Briefcase, label: 'Projects', path: '/projects' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  { icon: Users, label: 'Team', path: '/team' },
  { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { icon: Calendar, label: 'Attendance', path: '/attendance' }, // Correct path
];

export const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r p-4 transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Menu</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
          <X className="h-6 w-6" />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      <nav>
        <ul className="space-y-2">
          {sidebarItems.map(({ icon: Icon, label, path }) => (
            <li key={label}>
              <Link to={path} className={`flex items-center px-3 py-2 rounded-md ${location.pathname === path ? 'bg-accent' : ''}`}>
                <Icon className="mr-2 h-4 w-4" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
