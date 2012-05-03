if [[ "$#" != "1" ]]
then
	echo "Syntax: $0 <file>"
	exit -1
fi

sort $1 | uniq -c -d | sort -n -r
