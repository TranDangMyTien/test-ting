package Controllers

import (
	"net/http" //Cung cấp phương thức HTTP
	"strconv"
	"wan-api-kol-event/Const"      //Định nghĩa các hằng số
	"wan-api-kol-event/Logic"      //Lớp xử lý logic
	"wan-api-kol-event/ViewModels" //Định nghĩa các mô hình dữ liệu để gửi phản hồi về API - Như views.py

	"github.com/gin-gonic/gin" //Web framework cho GO => Tạo và xử lý endpoint API
	//"github.com/google/uuid"   //Thư viện tạo UUID
)

func GetKolsController(context *gin.Context) {
	var KolsVM ViewModels.KolViewModel
	//var guid = uuid.New().String()

	// * Get Kols from the database based on the range of pageIndex and pageSize
	// * TODO: Implement the logic to get parameters from the request
	// ? If parameter passed in the request is not valid, return the response with HTTP Status Bad Request (400)
	// @params: pageIndex
	// @params: pageSize
	pageIndexStr := context.DefaultQuery("pageIndex", "1")
	pageSizeStr := context.DefaultQuery("pageSize", "10")

	pageIndex, err := strconv.Atoi(pageIndexStr)
	if err != nil || pageIndex < 1 {
		context.JSON(http.StatusBadRequest, gin.H{"error": "Invalid pageIndex"})
		return
	}

	pageSize, err := strconv.Atoi(pageSizeStr)
	if err != nil || pageSize < 1 {
		context.JSON(http.StatusBadRequest, gin.H{"error": "Invalid pageSize"})
		return
	}

	kols, totalCount, error := Logic.GetKolLogic(pageIndex, pageSize)
	if error != nil {
		KolsVM.Result = Const.UnSuccess
		KolsVM.ErrorMessage = error.Error()
		KolsVM.PageIndex = int64(pageIndex)
		KolsVM.PageSize = int64(pageSize)
		KolsVM.TotalCount = 0
		KolsVM.NextPageAvailable = false
		KolsVM.PreviousPageAvailable = false
		//KolsVM.Guid = guid
		context.JSON(http.StatusInternalServerError, KolsVM)
		return
	}

	// Xác định tổng số trang dựa trên totalCount và pageSize
	totalCount64 := int64(totalCount)
	pageSize64 := int64(pageSize)
	totalPages := (totalCount64 + pageSize64 - 1) / pageSize64

	// Xác định xem có trang kế tiếp hoặc trang trước đó hay không
	nextPageAvailable := pageIndex < int(totalPages)
	previousPageAvailable := pageIndex > 1

	// Xử lý trường hợp không có KOL nào trên trang hiện tại
	if len(kols) == 0 && totalCount > 0 {
		context.JSON(http.StatusNotFound, gin.H{"error": "No KOLs found for the current page"})
		return
	}
	// * Return the response after the logic is executed
	// ? If the logic is successful, return the response with HTTP Status OK (200)
	KolsVM.Result = Const.Success
	KolsVM.ErrorMessage = ""
	KolsVM.PageIndex = int64(pageIndex)
	KolsVM.PageSize = int64(pageSize)
	//KolsVM.Guid = guid
	KolsVM.KOL = kols
	KolsVM.TotalCount = totalCount
	KolsVM.NextPageAvailable = nextPageAvailable
	KolsVM.PreviousPageAvailable = previousPageAvailable
	context.JSON(http.StatusOK, KolsVM)
}

//GetKolsController : Hàm xử lý các yêu cầu GET cho endpoint

//context: Tham số chứa các thông tin về yêu cầu HTTP
//gin.Context là phần của framework Gin để quản lý các yêu cầu và phản hồi

//biến KolsVM để lưu trữ dữ liệu phản hồi sẽ được gửi đến client

//guid đánh dấu yêu cầu (UUID: một chuỗi duy nhất để nhận diện yêu cầu )
