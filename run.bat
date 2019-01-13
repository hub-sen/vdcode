@echo off
set path=D:\Java\jdk1.8.0_181\bin
set JAVA_TOOL_OPTIONS=-Dfile.encoding=UTF-8
cd %cd%
javac ShowFile.java
echo «Î…‘∫Û... ...
java ShowFile
del ShowFile.class
start result.html
exit
