$(document).ready(() => {
  $('.songbutton').on('click', () => {
    $('.favoritesong').slideToggle();
  });

  $('.morebutton').on('click', () => {
    $('.moreinfo').slideToggle();
  });

  $('.playlistbutton').on('click', () => {
    $('.playlist').slideToggle();
  });

$('.imgbutton').on('click', () => {
  $('.photo').fadeToggle();
});


})
