function switchTheme(cssFile) {
  document.getElementById('pagestyle').setAttribute('href', 'themes/' + cssFile);
  return cssFile;
}
