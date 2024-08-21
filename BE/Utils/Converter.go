package Utils

import (
	"strconv"
	"time"
)

// int -> string
func Int64ToString(x int64) string {
	return strconv.FormatInt(x, 10)
}

// atring -> int
func StringToInt64(s string) int64 {
	temp, _ := strconv.ParseInt(s, 10, 64) //_ : Bỏ qua lỗi
	return temp
}

// float -> string
func Float64ToString(x float64) string {
	return strconv.FormatFloat(x, 'f', -1, 64)
}

// string -> float
func StringToFloat64(s string) float64 {
	temp, _ := strconv.ParseFloat(s, 64)
	return temp
}

// bool -> string
func BoolToString(x bool) string {
	return strconv.FormatBool(x)
}

// string -> bool
func StringToBool(s string) bool {
	temp, _ := strconv.ParseBool(s)
	return temp
}

// time -> string
func TimeToString(x time.Time) string {
	return x.Format("2006-01-02T15:04:05.00")
}

// string -> time
func StringToTime(s string) time.Time {
	temp, _ := time.Parse("2006-01-02T15:04:05.00", s)
	return temp
}

//Converter.go : Chuyển đổi giữa các kiểu dữ liệu phổ biến
