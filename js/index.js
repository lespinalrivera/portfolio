import $ from 'jquery';
import 'bootstrap';
import './animatescroll';

$(() => {
  console.log('ready');

  $('body').scrollspy();

  const home = $('#home');
  const projects = $('#projects');
  const skills = $('#skills');
  const contact = $('#contact');
  const dial = $('.dial');

  const scrollTo = (e, location) => {
    e.preventDefault();
    location.animatescroll({ scrollSpeed: 1000, easing: 'easeInOutQuad' });
  };

  $('[href="#home"]').click(e => {
    scrollTo(e, home);
  });
  $('[href="#projects"]').click(e => {
    scrollTo(e, projects);
  });
  $('[href="#skills"]').click(e => {
    scrollTo(e, skills);
  });
  $('[href="#contact"]').click(e => {
    scrollTo(e, contact);
  });

  $(document).scroll(() => {
    const currentScrollPos = window.pageYOffset;
    const pageHeight =
      home.height() + projects.height() + skills.height() + contact.height();
    const degreeInPercentage = (currentScrollPos / pageHeight) * 100;
    const degreeRotated = degreeInPercentage * 3.6;

    dial.css('transform', `rotate(${degreeRotated}deg)`);
  });
});
