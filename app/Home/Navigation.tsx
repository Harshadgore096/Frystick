import React from 'react'
import Link from 'next/link';
import Login from 'login/page.tsx';
const Navigation = () => {
    const navItems=[
        { id:"Dashboard",href:'/'},
        { id:"Bets",href:''},
        {id:'Messages',href:''},
        { id:'wallet',href:''},
        { id:'History',href:''},
        
    ]
  return (
   
<div>
{/* Desktop View */}
<div className="hidden md:flex w-full h-60 items-center justify-between px-8 py-4">
  {/* Left Section */}
  <div className="w-1/2 text-left text-xl font-semibold">
    FryStick
  </div>

  {/* Right Section */}
  <div className="w-1/2">
    <div className="flex justify-end gap-8">
      {navItems.map((data, index) => (
        <div key={index}>
          <span className="text-base">{data.id}</span>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Mobile View */}
<div className="flex md:hidden w-full flex-col items-center text-center px-4 py-4">
  {/* Logo */}
  <div className="text-xl font-semibold mb-4">
    FryStick
  </div>

  {/* Nav Items */}
  <div className="flex flex-wrap justify-center gap-4">
    {navItems.map((data, index) => (
      <div key={index}>
        <span className="text-sm">{data.id}</span>
      </div>
    ))}
  </div>
</div>

</div>

  )
}

export default Navigation;
