@echo off

title update static files

:: 设置源目录
set sourceDirectory="C:\Users\TDH\Desktop\dist\"

:: 设置源zip
set sourceZip="C:\Users\TDH\Desktop\dis*"

:: 设置源index
set sourceIndex="C:\Users\TDH\Desktop\dist\dist\inde*"

:: 设置源static
set sourceStatic="C:\Users\TDH\Desktop\dist\dist\static\*"

:: 设置目标index
set targetIndex="D:\ideaPro\gitlab\SG3.0\swaptrailer-parent\swaptrailer-apps\swaptrailer-app-web\src\main\webapp\WEB-INF\view\intelligent\index.htm"

:: 设置目标static
set targetStatic="D:\ideaPro\gitlab\SG3.0\swaptrailer-parent\swaptrailer-apps\swaptrailer-app-web\src\main\webapp\static\"

:: 原目录已存在, 删除
if exist %sourceDirectory% rd /s /q %sourceDirectory%

:: 判断是否存在压缩文件
if exist %sourceZip% goto main

:: 不存在压缩文件, 退出
goto notexist

:main
:: 解压文件
echo Extracting files... 
D:\WinRAR\WinRAR.exe x -r %sourceZip% %sourceDirectory%

:: 删除原文件
echo Deleting original files...
del %targetIndex%
rd /s /q %targetStatic%

:: 替换文件
echo Replacing files...
move %sourceIndex% %targetIndex%

xcopy %sourceStatic% %targetStatic% /e /s

:: 删除源文件
echo Waiting for the original file to be deleted...
choice /t 5 /d y /n >nul

del %sourceZip%
rd /s /q %sourceDirectory%

if exist %sourceZip% goto deletionFailed

:: 删除成功
echo The source file was deleted successfully.
goto exitEcho


:notexist
echo The target file does not exist !!!
goto exitEcho

:deletionFailed
echo Source file deletion failed, please delete manually
goto exitEcho

:exitEcho
echo Exit after 5 seconds ...
choice /t 5 /d y /n >nul


exit