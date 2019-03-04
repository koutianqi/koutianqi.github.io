
## **Git basic**  
  
Each Git project has two parts: files and directories that users edit directly and records of  the project's history(.git in 
root direcotry of the repository)  

Every commit to a repository has a unique identifier called a hash 

Commit changes to a repository in two steps:
 - Add files to the staging area
 - Commit everything in the staging area
    
You can tell it to stop paying attention to files you don't care about by creating a file in the root directory of your repository called **.gitignore** and storing a list of wildcard patterns that specify the files you don't want Git to pay attention to.

## **Git Syntax**  
**git init project-name**: create a repository for new project  
**git clone url newProjectName**: clone a project  
**git remote -v** : list all information of sources  
**git pull repositoryName branchName** : pull changes from remote repositories  
**git push**: push changes to remote repostitories
**git status** : check status of repository  
**git diff filename/directory/null**: show all the changes  
  - -r : compare to a particular version
  - HEAD: the most recent commit  
  - HEAD~1 : the commit before most recent commit
  
**git add filename** : add file to staging area  
**git commit -m "log message"** : save the changes in the staging area  
**git log PathToFile/Null** : check log history, use space to page down and "q" to quit  
**git show**: view the details of a specific commit  
**git annotate FilePath** : show who made the last changes  
**git clean** : 
- -n: show a list of files that are in the repository but not tracked
- -f: delete those files

**git config --list**: 
 - --system: settings for every user on this computer
 - --global: settings for every one of the projects
 - --local: settings for one specific project

**git config --global setting.name setting.value**: change configuration  
**git checkout -- filename** : undo the changes made to a file(not yet staged)
- -b: create new branch
- brachName: change directory to the branch  

**git reset HEAD filename** : undo the changes made to a file(staged)  
**git branch** : list all of the branches in a repository  
**git rm** : remove file  
**git merge branch1 branch2**: merge two branches 
