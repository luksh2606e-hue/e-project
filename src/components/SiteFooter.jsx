import React from 'react';
import LocalClock from './LocalClock';
import { Mountain, Camera, CirclePlay, Compass, X } from 'lucide-react';

export default function SiteFooter({ lightbox, setLightbox }) {
  return <>
    <footer className="footer"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><Mountain/></span><span><b>ALPINE ASCENTS</b><small>THE MOUNTAIN JOURNEY</small></span></a><p>A student informational project about mountaineering, mountain knowledge and responsible adventure.</p><span className="social"><a href="https://instagram.com" aria-label="Instagram"><Camera/></a><a href="https://youtube.com" aria-label="YouTube"><CirclePlay/></a></span></div><div><h4>Explore</h4><a href="#history">History</a><a href="#styles">Types & styles</a><a href="#techniques">Techniques</a><a href="#records">Records</a></div><div><h4>Plan wisely</h4><a href="#clubs">Clubs & maps</a><a href="#safety">Hazards</a><a href="#guidelines">Guidelines</a><a href="#updates">Developments</a></div><div className="footer-bottom"><span>© 2026 Alpine Ascents · Educational demo</span><span>Learn. Prepare. Respect the mountains.</span><a href="#home">Back to top ↑</a></div></footer>
    <div className="statusbar"><span><Compass size={13}/> FIELD STATUS · LOCAL TIME <LocalClock /></span><span>CLIMB RESPONSIBLY · LEAVE NO TRACE · PLAN FOR THE CONDITIONS</span></div>{lightbox&&<div className="lightbox" onClick={()=>setLightbox(null)} role="presentation"><button aria-label="Close image" onClick={()=>setLightbox(null)}><X/></button><img src={lightbox} alt="Enlarged mountain landscape"/></div>}
  </>;
}
