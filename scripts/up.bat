REM ng build --configuration production --base-href / --deploy-url /

REM "./scripts/up.bat" comment

echo -------------------------------------------
echo Adding and committing changes...
echo -------------------------------------------
git add .
git commit -m "%*"
git push

echo -------------------------------------------
echo Push complete!
echo -------------------------------------------