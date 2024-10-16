setInterval(() => {
  const endTime = new Date("5/1/2026");
  const altabeah = new Date("1/1/2026");
  const radifTime = new Date("3/1/2026");
  const currentDate = new Date();

  let timeForGrad = endTime.getTime() - currentDate.getTime();
  let timeForStart = altabeah.getTime() - currentDate.getTime();
  let timeForEnd = radifTime.getTime() - currentDate.getTime();
  let messages = {
    beforeStart: `
      <div class="message h1">
      هانت يا دفعه
  </div>
  <div class="time h3">
  ${Math.floor(timeForGrad / (30 * 24 * 60 * 60 * 1000))} M : ${
      Math.floor(timeForGrad / (24 * 60 * 60 * 1000)) % 30
    } D : ${Math.floor((timeForGrad / (60 * 60 * 1000)) % 24)} H : ${Math.floor(
      (timeForGrad / (1000 * 60)) % 60
    )} M : ${Math.floor((timeForGrad / 1000) % 60)} S 
  (total => ${Math.floor(timeForGrad / (24 * 60 * 60 * 1000))} Days)</div>
      `,
    beforeEnd: `
      <div class="message h1">
       وادى التعبئة يا عم ومعاك شهادة رديف 
  </div>
  <div class="time h3">
  ${Math.floor(timeForGrad / (30 * 24 * 60 * 60 * 1000))} M : ${
      Math.floor(timeForGrad / (24 * 60 * 60 * 1000)) % 30
    } D : ${Math.floor((timeForGrad / (60 * 60 * 1000)) % 24)} H : ${Math.floor(
      (timeForGrad / (1000 * 60)) % 60
    )} M : ${Math.floor((timeForGrad / 1000) % 60)} S 
  (total => ${Math.floor(timeForGrad / (24 * 60 * 60 * 1000))} Days)</div>
  `,
    beforeGrad: `
      <div class="message h1">
      يلا يا عم اخر ربع فالجيش
  </div>
  <div class="time h3">
  ${Math.floor(timeForGrad / (30 * 24 * 60 * 60 * 1000))} M :
  ${Math.floor(timeForGrad / (24 * 60 * 60 * 1000)) % 30} D :
  ${Math.floor((timeForGrad / (60 * 60 * 1000)) % 24)} H :
  ${Math.floor((timeForGrad / (1000 * 60)) % 60)} M :
  ${Math.floor((timeForGrad / 1000) % 60)} S 
  (total => ${Math.floor(timeForGrad / (24 * 60 * 60 * 1000))} Days)</div>
  `,
    graduated: `
  <div class="h1">
  واخيرا خلصت جيش
  </div>
  `,
  };

  console.log({
    timeForGrad,
  });
  if (timeForStart > 0) {
    document.getElementById("before-exam").innerHTML = messages.beforeStart;
  } else if (timeForEnd > 0) {
    document.getElementById("before-exam").innerHTML = messages.beforeEnd;
  } else if (timeForGrad > 0) {
    document.getElementById("before-exam").innerHTML = messages.beforeGrad;
  } else {
    document.getElementById("before-exam").innerHTML = messages.graduated;
  }
}, 1000);
