package entry

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)


// MakeFromKeyboard reads user input from stdin, returns a new Entry
func MakeFromKeyboard() Entry {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("Title: ")
	title, _ := reader.ReadString('\n')
	title = strings.TrimSpace(title)

	fmt.Print("Activity: ")
	activity, _ := reader.ReadString('\n')
	activity = strings.TrimSpace(activity)

	return Entry{
		Title: title,
		Datetime: MakeTimestamp(),
		Activity: activity,
	}
}

