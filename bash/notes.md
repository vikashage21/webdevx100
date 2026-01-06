# 🖥️ Bash Commands – `ls` & Basic File Operations

## 📁 `ls` – List Files and Directories

- `ls`  
  List files and directories in the current directory.

- `ls -l`  
  Show detailed file information (permissions, owner, size, date).

- `ls -a`  
  Show hidden files (files starting with `.`).

- `ls -la`  
  Show detailed list including hidden files.

- `ls -R`  
  List files recursively (including sub-directories).

- `ls -Ra`  
  List all files (including hidden) recursively.

- `ls -t`  
  Sort files by last modified time.

- `ls -lt`  
  Detailed list sorted by modified time.

- `ls -lr`  
  List files in reverse order.

- `ls -ls`  
  Show file size in blocks.

---

## 📄 Listing Specific Files

- `ls *.json`  
  Show only `.json` files.

- `ls src*`  
  Show all files/folders starting with `src`.

- `ls ..`  
  Show files from the parent directory.

- `ls -lR | grep .json`  
  Find all `.json` files recursively.

---

## 📄 File Commands

- `cat filename`  
  Display file content.

- `cat > filename`  
  Create or overwrite file content (Ctrl + D to save).

- `cat >> filename`  
  Append data to a file.

- `touch filename`  
  Create a new empty file.

- `echo "hello world"`  
  Print text to terminal.

- `echo "hello world" > file.txt`  
  Write text to a file.

---

## 📂 Directory Commands

- `mkdir dirname`  
  Create a new directory.

- `mkdir test && cd test`  
  Create a directory and navigate into it.

- `mkdir -p frontend/src`  
  Create nested directories.

---

## 🔄 File Operations

- `mv script.js runtime-script.js`  
  Rename a file.

- `mv file.txt /destination/path/`  
  Move a file.

- `cp filename destination`  
  Copy a file.

- `cp -r folder destination`  
  Copy a directory recursively.

- `rm filename`  
  Delete a file.

- `rm -r foldername`  
  Delete a directory.

- `rm -rf foldername` ⚠️  
  Force delete (use carefully).

---

## 🔐 Permission Commands (`chmod`)

- `chmod u-x filename`  
  Remove execute permission from the owner.

- `chmod 777 filename`  
  Give read, write, execute permission to everyone (unsafe).

---

## 📄 File Viewing Commands

- `head newFile.txt`  
  Show first 10 lines of a file.

- `head -20 newFile.txt`  
  Show first 20 lines.

- `tail newFile.txt`  
  Show last 10 lines.

- `tail -n 4 newFile.txt`  
  Show last 4 lines.

- `tail -n +25 newFile.txt | head -20`  
  Show lines 25 to 44 from the file.

---

## 🔍 Search Commands (`grep`)

- `grep 'one' newFile.txt`  
  Search for the word `one`.

- `grep -i 'one' newFile.txt`  
  Case-insensitive search.

- `grep -h 'one' newFile.txt`  
  Hide filename in output.

- `grep -r 'one' .`  
  Search recursively in current directory.

- `grep -hir 'one' .`  
  Recursive, case-insensitive search without filenames.

- `grep -o 'one' newFile.txt`  
  Print only matched words.

- `grep -w 'one' newFile.txt`  
  Match whole word only.

---

## 📊 File Info Commands

- `wc newFile.txt`  
  Show line, word, and character count.

---

## ✏️ Editor Command

- `vi newFile.txt`  
  Open file in Vim editor.

---

## 🕘 History Command

- `history`  
  Show previously executed commands.

---

## ✅ Quick Summary

- `ls` → List files  
- `cat` → Read/write files  
- `touch` → Create files  
- `mkdir` → Create folders  
- `mv` → Move/rename  
- `cp` → Copy  
- `rm` → Delete  
- `chmod` → Change permissions  
- `grep` → Search text  
- `head/tail` → View file parts  
 