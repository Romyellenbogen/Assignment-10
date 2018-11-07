$(document).ready(() => {
  $('.photo').hide();
  $('.favoritesong').hide();
  $('.playlist').hide();
  $('.moreinfo').hide();



  $('.imgbutton').on('click', event => {
    $(event.currentTarget).next().fadeToggle('.photo');
  })

  $('.songbutton').on('click', event => {
    $(event.currentTarget).next().slideToggle('.favoritesong');
  })

  $('.playlistbutton').on('click', event => {
    $(event.currentTarget).next().slideToggle('.playlist');
  })

  $('.morebutton').on('click', event => {
    $(event.currentTarget).next().slideToggle('.moreinfo');
  })
});
