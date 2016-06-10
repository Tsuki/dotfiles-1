alias reload!='. ~/.zshrc'
alias cls='clear'

# sort files in current directory by the number of words they contain
alias wordy='wc -w * | sort | tail -n10'
alias filecount='ls -aRF | wc -l'
alias u='du -sh * | gsort -h'
#alias adventure='emacs -batch -l dunnet'
#alias mailsize='du -hs ~/Library/mail'
alias bk='cd $OLDPWD'
# alias ttop='top -ocpu -R -F -s 2 -n30'
alias lh='ll -d .*'
alias showhidden="defaults write com.apple.finder AppleShowAllFiles TRUE && killall Finder"
alias hidehidden="defaults write com.apple.finder AppleShowAllFiles FALSE && killall Finder"
#dockers
alias containerclean="docker ps -a -q | xargs docker rm"
alias imageclean="docker images --filter dangling=true -q | xargs docker rmi"
alias dmenv='eval "$(docker-machine env dev)"'

export JAVA_6_HOME="`/usr/libexec/java_home -v '1.6*'`"
export JAVA_7_HOME="`/usr/libexec/java_home -v '1.7*'`"
export JAVA_8_HOME="`/usr/libexec/java_home -v '1.8*'`"
#export JAVA_HOME=$JAVA_6_HOME
alias jdk8='export JAVA_HOME=$JAVA_8_HOME'
alias jdk7='export JAVA_HOME=$JAVA_7_HOME'
alias jdk6='export JAVA_HOME=$JAVA_6_HOME'
alias datepb='date +"%H:%M:%S" |pbcopy'
alias gz='tar zcvf'
alias sdkinit='source "$HOME/.sdkman/bin/sdkman-init.sh"'
alias nvminit='. "$(brew --prefix nvm)/nvm.sh" --no-use'
export PATH="$HOME/.jenv/bin:$PATH"
