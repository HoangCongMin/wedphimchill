export function Slyder(e: any, time: any, amount: any, start: any) {
  var eAmt = amount / 100;
  var curtime = 0;
  var scrollcounter = 0;
  const y = window.scrollY;
  while (curtime <= time) {
    window.setTimeout(SHS_B, curtime, e, scrollcounter, eAmt, start, y);
    curtime += time / 100;
    scrollcounter++;
  }
  window.scrollTo(0, y);
}

function SHS_B(e: any, sc: any, eAmt: any, start: any, y: any) {
  e.scrollLeft = eAmt * sc + start;
}
