#JETXI

Youtube-ko bideoak jeisteko script bat dl-youtube erabiliz.

##**Instalatzeko**:
1. git clone https://github.com/ikerib/jetxi.git jetxi
cd jetxi
2. Ireki jetsi.js eta aldatu `dest` aldagaia. Hemen zehazten da jetxitako fitxategiak non gorde nahi diren
3. sudo npm install . -g
4. alias bat sortu zure .bash_rc edo zsh erabiltzen baduzu .zhrc horrela:
5. alias jetxi='node /usr/local/lib/node_modules/jetxi/jetxi.js'

##**Erabiltzeko**
>Ez ahaztu  eguneratzea ingurumena `source ~/.zshrc` edo `source ~/.bash_rc` erabiliz

ondoren demagun https://www.youtube.com/watch?v=2OBZHB5I89A bideoa jetxi nahi dugula. Horrela:

    jetxi https://www.youtube.com/watch?v=2OBZHB5I89A
   
