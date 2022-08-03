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
