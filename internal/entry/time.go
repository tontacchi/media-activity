package entry

import (
	"fmt"
	"time"
)

func MakeTimestamp() string {
	now := time.Now()

	// format: yyyy-mm-dd-hh
	timestamp := fmt.Sprintf(
		"%d-%d-%d-%d-%d-%d",
		now.Year(),
		int(now.Month()),
		now.Day(),
		now.Hour(),
		now.Minute(),
		now.Second(),
	)

	return timestamp
}

