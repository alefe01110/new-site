// The studio's visual motion is enabled automatically on every visit.
document.documentElement.dataset.motion='on';
const motionEvents=new EventTarget();
window.leffeMotion={matches:false,addEventListener:(...args)=>motionEvents.addEventListener(...args),removeEventListener:(...args)=>motionEvents.removeEventListener(...args)};
