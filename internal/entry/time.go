package entry

import (
	"fmt"
	"time"
)

func MakeTimestamp() string {
	now := time.Now()

	// format: yyyy-mm-dd-hh
	timestamp := fmt.Sprintf(
		"%04d-%02d-%02d-%02d-%02d-%02d",
		now.Year(),
		int(now.Month()),
		now.Day(),
		now.Hour(),
		now.Minute(),
		now.Second(),
	)

	return timestamp
}

