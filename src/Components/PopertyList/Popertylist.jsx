import React from 'react'
import "./Popertylist.scss"
export const Popertylist = () => {
  return (
    <div className='pList w-full flex justify-between gap-6'>
      <div className="pListItem">
        <img src="https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0=" alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://w0.peakpx.com/wallpaper/696/231/HD-wallpaper-luxury-apartment-modern-interior-living-room-two-storey-apartment-minimalism-modern-design.jpg" alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://media.istockphoto.com/id/1208302982/photo/beachfront-swimming-pool.jpg?b=1&s=170667a&w=0&k=20&c=1dN1aarGy5z1Wu3Y_MMCKCjwCq0JBGYZ-upy9ykTrKA=" alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?b=1&s=170667a&w=0&k=20&c=tj7_rTMwrsBVmZno-bAfs_x5mWExklMewUOHqTrpH4Q=" alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://images.squarespace-cdn.com/content/v1/58d9a0dd6b8f5bb9ec4802a7/1666393357368-RB2CSFUH26KRHO8KC2M0/Rustic+Hollow+-+Living+Room+2.jpg" alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Cabbins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  )
}
