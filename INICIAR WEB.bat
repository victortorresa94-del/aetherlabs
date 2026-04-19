@echo off
title Aether Labs — Servidor Local
cd /d "%~dp0"
cls
echo.
echo  =============================================
echo    AETHER LABS  ^|  Servidor de desarrollo
echo  =============================================
echo.
echo  Arrancando...
echo  Abre el navegador en: http://localhost:3000
echo.
npm run dev
pause
