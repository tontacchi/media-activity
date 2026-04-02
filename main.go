package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"strings"

	"media/internal/entry"
)

type Entry struct {
	Title    string `json:"title"`
	Datetime string `json:"datetime"`
	Activity string `json:"activity"`
}


const WritePerms = 0644


func main() {
	path := fmt.Sprintf(
		"./docs/data/%s.json",
		entry.GetYearMonth(),
	)

	entries := prependEntry(makeEntry(), readJSON(path))	

	writeEntries(entries, path)
}


func makeEntry() Entry {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("Title: ")
	title, _ := reader.ReadString('\n')
	title = strings.TrimSpace(title)

	fmt.Print("Activity: ")
	activity, _ := reader.ReadString('\n')
	activity = strings.TrimSpace(activity)

	return Entry{
		Title: title,
		Datetime: entry.MakeTimestamp(),
		Activity: activity,
	}
}

func readJSON(path string) []Entry {
	fp, err := os.ReadFile(path)
	if err != nil { return []Entry{} }

	var entries []Entry
	err = json.Unmarshal(fp, &entries)
	if err != nil { return []Entry{} }

	return entries
}

func prependEntry(new Entry, oldEntries []Entry) []Entry {
	entries := make([]Entry, 0, len(oldEntries) + 1)
	entries = append(entries, new)
	entries = append(entries, oldEntries...)

	return entries
}

func writeEntries(entries []Entry, path string) {
	jsonStr, err := json.MarshalIndent(entries, "", "    ")
	if err != nil { return }

	fmt.Println("writeEntries: writing to", path)
	fmt.Println(string(jsonStr))
	_ = os.WriteFile(path, jsonStr, WritePerms)
}

