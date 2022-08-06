

#!/bin/bash
echo 'press a button to try to win :) presently the person who presses it first AFTER the 1000s for a round is complete gets the whole pot of wsol ;) be sure to run spl-token wrap 0.5 before playing ;)'

while [ true ] ; do

read -t 30 -n 1
if [ $? = 0 ] ; then
echo ""
echo "ok"
node cli/src/matches join_match -cp createMatch.json -e devnet -k ~/.config/solana/id.json -l debug
else
echo 'press a button to try to win :) presently the person who presses it first AFTER the 1000s for a round is complete gets the whole pot of wsol ;) be sure to run spl-token wrap 0.5 before playing ;)'

fi
done