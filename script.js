gsap.from("#heading h1", {
  opacity: 0,
  y: 30,
  stagger: 0.2,
  delay: 1,
  duration: 0.7,
  ease: "power1.out",
});

const containers = ["#container1", "#container2", "#container3", "#container4"];
const a = Array.from({ length: 4 }, () => Math.random());



containers.forEach((e,i) => {
    
    
    gsap.from(e, {
        opacity: 0,
        stagger: 0.2,
        delay: a[i]+1.9,
        duration: 1,
        ease: "power1.out",
      });
    
});


const images = document.querySelectorAll("img");

images.forEach((img) => {
  let hoverAnimation = gsap.to(img, { scale: 1.5, paused: true, ease: "power1.out" });

  img.addEventListener("mouseenter", () => {
    hoverAnimation.play();

  
    images.forEach(otherImg => {
      if (otherImg !== img) {
        gsap.to(otherImg, { opacity: 0, duration: 0.3, ease: "power1.out" });
      }
    });
  });

  img.addEventListener("mouseleave", () => {
    hoverAnimation.reverse();
    gsap.to(img, { x: 0, y: 0, duration: 0.3, ease: "power1.out" });

   
    images.forEach(otherImg => {
      gsap.to(otherImg, { opacity: 1, duration: 0.3, ease: "power1.out" });
    });
  });

  img.addEventListener("mousemove", (event) => {
    const rect = img.getBoundingClientRect();
    const range = 20; 

    
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * range * 10;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * range * 8;

    gsap.to(img, { x: offsetX, y: offsetY, duration: 0.2, ease: "power1.out" });
  });
});


