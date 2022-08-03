readme_2.md

About to dump a copy of a repo from several years ago in this local directory.  Unrelated to the tv1 form assessment.  Before digging into that, making certain git operations are working in a way that will support this project.

Steps so far:
1.  uploaded ssh public key from my server to GitHub account.  I thought that would put me in business, but I don't know for sure whether it did anything.
2.  Created a PAT (personal access token, which has to be used instead of a password when accessing git hub from the command-line on my server.  The benefit of the PAT is it can be handled in a way that guarantees encryption and that no one can intercept it.  That benefit requires using a cache handler or another option, possibly requiring a headless browser.  I need to go back this matter to secure my cli interaction from local server to GitHub.  This was done through settings on the GitHub website while logged in.
3.  Installed and activated the credential helper.  After activating it, username and password are intercepted and stored the next time they are used on the command line.
4.  Overall, this is a jumbled scene extremely reminiscent of the Microsoft Way when Bill Gates was in the throes of putting Windows together from about 1991 through the release of Windows XP in late 2000.  The connection to Microsoft is mentioned in the GitHub documentation of the process of setting up this security.

And here we go.


======================================

Verified this repo has no directories or files matching names in the repo about to dumped in here.  .git and .gitignore have been removed from the file set on its way in here.


Got this error
$ git push origin master
error: src refspec master does not match any
error: failed to push some refs to 'https://github.com/danallendotcom/tv1_form_assessment.git'

Leaving 'master' off end of command works the way I need.


==========================================================


The minor file flood worked ok...add, committing, and pushing to origin.

Then will delete it all and pull in copies of the files from the tv1 repo.  Will not clone into this directory, because I am pushing the changes to my own repo on github.  I am sure there is amore efficient way of doing this, this is a hack for today.

git status

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   .travis.yml
	new file:   CONTRIBUTING.md
	new file:   LICENSE
	new file:   README_dummy_repo.md
	new file:   composer.json
	new file:   examples/example-captcha.php
	new file:   phpunit.xml.dist
	modified:   readme_2.md
	new file:   src/ReCaptcha/ReCaptcha.php
	new file:   src/ReCaptcha/RequestMethod.php
	new file:   src/ReCaptcha/RequestMethod/Curl.php
	new file:   src/ReCaptcha/RequestMethod/Post.php
	new file:   src/ReCaptcha/RequestMethod/Socket.php
	new file:   src/ReCaptcha/RequestMethod/SocketPost.php
	new file:   src/ReCaptcha/RequestParameters.php
	new file:   src/ReCaptcha/Response.php
	new file:   src/autoload.php
	new file:   tests/ReCaptcha/ReCaptchaTest.php
	new file:   tests/ReCaptcha/RequestMethod/PostTest.php
	new file:   tests/ReCaptcha/RequestMethod/SocketPostTest.php
	new file:   tests/ReCaptcha/RequestParametersTest.php
	new file:   tests/ReCaptcha/ResponseTest.php


===========================

Commit and push to origin successful.

Now deleting everything.

=====================

git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
 (use "git restore --staged <file>..." to unstage)
  deleted:    .travis.yml
  deleted:    CONTRIBUTING.md
  deleted:    LICENSE
  deleted:    README_dummy_repo.md
  deleted:    composer.json
  deleted:    examples/example-captcha.php
  deleted:    phpunit.xml.dist
  deleted:    readme_2.md
  deleted:    src/ReCaptcha/ReCaptcha.php
  deleted:    src/ReCaptcha/RequestMethod.php
  deleted:    src/ReCaptcha/RequestMethod/Curl.php
  deleted:    src/ReCaptcha/RequestMethod/Post.php
  deleted:    src/ReCaptcha/RequestMethod/Socket.php
  deleted:    src/ReCaptcha/RequestMethod/SocketPost.php
  deleted:    src/ReCaptcha/RequestParameters.php
  deleted:    src/ReCaptcha/Response.php
  deleted:    src/autoload.php
  deleted:    tests/ReCaptcha/ReCaptchaTest.php
  deleted:    tests/ReCaptcha/RequestMethod/PostTest.php
  deleted:    tests/ReCaptcha/RequestMethod/SocketPostTest.php
  deleted:    tests/ReCaptcha/RequestParametersTest.php
  deleted:    tests/ReCaptcha/ResponseTest.php


=================================

delete of test files as expected.

Cloning tv1 repo into another directory then will copy into here and then do the project
