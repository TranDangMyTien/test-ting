package main

import (
	"fmt" // Thư viện cho định dạng chuỗi
	"log" //Ghi nhật ký thông báo lỗi/ thông báo khác
	"time"
	"wan-api-kol-event/Controllers"  // Xử lý logic cho các route
	"wan-api-kol-event/Initializers" //Thiết lập biến môi trường, kết nối CSDL
	"wan-api-kol-event/Models"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin" //Framework xử lý các yêu cầu HTTP
)

func init() {
	Initializers.LoadEnvironmentVariables() //Tải các biến môi trường
	Initializers.ConnectToDB()              //Kết nối với CSDL MySQL bằng GORM
}

func main() {
	r := gin.Default()

	// Cấu hình CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r.GET("/kols", Controllers.GetKolsController)

	// Tạo bảng trong cơ sở dữ liệu dựa trên mô hình Kol
	err := Initializers.DB.AutoMigrate(&Models.Kol{})
	if err != nil {
		log.Fatalf("Error migrating database: %v", err)
	}

	// Tạo dữ liệu mẫu
	for i := 1; i <= 30; i++ {
		kol := Models.Kol{
			// KolID:                int64(i),
			UserProfileID:        int64(2000 + i),
			Language:             "en",
			Education:            "Bachelor's Degree",
			ExpectedSalary:       50000 + int64(i)*1000,
			ExpectedSalaryEnable: true,
			ChannelSettingTypeID: int64(i%3 + 1),
			IDFrontURL:           "https://example.com/id-front.jpg",
			IDBackURL:            "https://example.com/id-back.jpg",
			PortraitURL:          "https://example.com/portrait.jpg",
			RewardID:             int64(i%5 + 1),
			PaymentMethodID:      int64(i%5 + 1),
			TestimonialsID:       int64(i%5 + 1),
			VerificationStatus:   true,
			Enabled:              true,
			ActiveDate:           time.Now(),
			Active:               true,
			CreatedBy:            "admin",
			CreatedDate:          time.Now(),
			ModifiedBy:           "admin",
			ModifiedDate:         time.Now(),
			IsRemove:             false,
			IsOnBoarding:         true,
			Code:                 fmt.Sprintf("KOL2024%02d", i), // Sử dụng fmt.Sprintf để định dạng chuỗi
			PortraitRightURL:     "https://example.com/portrait-right.jpg",
			PortraitLeftURL:      "https://example.com/portrait-left.jpg",
			LivenessStatus:       true,
		}

		result := Initializers.DB.Create(&kol)
		if result.Error != nil {
			log.Fatalf("Error creating record: %v", result.Error)
		}
	}

	log.Println("Dummy data creation complete.")

	// Run Gin server
	if err := r.Run(":8081"); err != nil {
		log.Println("Failed to start server")
	}
}
