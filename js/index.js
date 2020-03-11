const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



function setAnchorElements() {
  const navItems = document.querySelectorAll('a');

  navItems.forEach((item, index) => {
    item.textContent = siteContent.nav[`nav-item-${index + 1}`];
    item.style.color = 'green';
  });

  const nav = document.querySelector('nav');
  const disney = document.createElement('a');
  disney.textContent = "Disney";
  const orlando = document.createElement('a');
  orlando.textContent = "Orlando";

  disney.style.color = 'green';
  orlando.style.color = 'green';

  nav.appendChild(disney);
  nav.appendChild(orlando);
}




function setCtaElements() {
  const cta = document.querySelector('.cta');
  const ctaText = document.querySelector('.cta-text');
  const ctaImg = document.querySelector('#cta-img');

  //CTA h1 Mani:
  ctaText.querySelector('h1').textContent = siteContent.cta.h1;

  //CTA button Mani:
  ctaText.querySelector('button').textContent = siteContent.cta.button;

  // CTA IMG Mani:
  ctaImg.src = siteContent.cta["img-src"];
}



function setDetails() {
  const topContent = document.querySelector('.top-content');
  const topTextContent = topContent.querySelectorAll('.text-content');

  // TOP CONTENT
  topTextContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
  topTextContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];

  topTextContent[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
  topTextContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];

  // MIDDLE IMAGE
  const middleImg = document.getElementById('middle-img');
  middleImg.src = siteContent["main-content"]["middle-img-src"];

  // BOTTOM CONTENT

  const bottomContent = document.querySelector('.bottom-content');
  const bottomTextContent = bottomContent.querySelectorAll('.text-content');

  bottomTextContent[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
  bottomTextContent[0].querySelector('p').textContent = siteContent["main-content"]["services-content"];

  bottomTextContent[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
  bottomTextContent[1].querySelector('p').textContent = siteContent["main-content"]["product-content"];

  bottomTextContent[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
  bottomTextContent[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"];
}



function setContact() {
  const contact = document.querySelector('.contact');

  contact.querySelector('h4').textContent = siteContent.contact["contact-h4"];
  const contactParagraghs = contact.querySelectorAll('p');

  contactParagraghs[0].textContent = siteContent.contact.address;
  contactParagraghs[1].textContent = siteContent.contact.phone;
  contactParagraghs[2].textContent = siteContent.contact.email;
}



function setFooter() {
  const footer = document.querySelector('footer');
  console.log(footer);
  footer.querySelector('p').textContent = siteContent.footer.copyright;
}

// Init
setAnchorElements();
setCtaElements();
setDetails();
setContact();
setFooter();