package main

import (
	// "bufio"
	// "bytes"
	"encoding/json"
	"fmt"
	"os"
)

type Entry struct {
	Title    string `json: "title"`
	Datetime string `json: "datetime"`
	Activity string `json: "activity"`
}

const WritePerms = 0644


func main() {
	const path = "./data/2026-03.json"

	entries := readJSON(path)

	newEntry := Entry{
		Title:    "Sousou no Frieren S2",
		Datetime: "2026-03-08-18-21-00",
		Activity: "Watched episode 6 - 7 of",
	}
	entries = prependEntry(newEntry, entries)
	
	writeEntries(entries, path)
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
	// _ = os.WriteFile(path, jsonStr, WritePerms)
}

