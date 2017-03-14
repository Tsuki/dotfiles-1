module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    'ack',
    'ag',
    // Install GNU core utilities (those that come with OS X are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    'fortune',
    'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    'gifsicle',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --with-default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    'httpie',
    // jq is a sort of JSON grep
    'jq',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    //'mas',
    // Install some other useful utilities like `sponge`
    'moreutils',
    'nmap',
    'openconnect',
    'reattach-to-user-namespace',
    // better/more recent version of screen
    'homebrew/dupes/screen',
    'tmux',
    'tree',
    'ttyrec',
    // better, more recent vim
    'vim --with-override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri',
    'n',
    'htop',
    //'p7zip',
    //'unrar',
    'python3',
    'git-extras',
    'freetype',
    'ssh-copy-id',
    'wget --enable-iri'
    'sdkman'
  ],
  cask: [
    'smartgit',
    'alfred',
    'sequel-pro',
    'istat-menus',
    'smoothmouse',
    'google-chrome',
    'owncloud',
    'iterm2',
    'spectacle',
  ],
  gem: [
    'git-up',
    'pry',
    'pry-coolline',
    'pry-nav',
  ],
  npm: [
    //'antic',
    //'buzzphrase',
    //'eslint',
    //'instant-markdown-d',
    // 'generator-dockerize',
    //'gulp',
    //'npm-check',
    //'prettyjson',
    //'trash',
    //'vtop'
    // ,'yo'
  ]
};
