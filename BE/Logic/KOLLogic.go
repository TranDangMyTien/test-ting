package Logic

import (
	"wan-api-kol-event/DTO"
	"wan-api-kol-event/Initializers"
	"wan-api-kol-event/Models"
)

// * Get Kols from the database based on the range of pageIndex and pageSize
// ! USE GORM TO QUERY THE DATABASE
// ? There are some support function that can be access in Utils folder (/BE/Utils)
// --------------------------------------------------------------------------------
// @params: pageIndex
// @params: pageSize
// @return: List of KOLs and error message
func GetKolLogic(pageIndex int, pageSize int) ([]*DTO.KolDTO, int64, error) {
	var kols []Models.Kol
	var totalCount int64
	// Calculate total count of KOLs in the database
	if err := Initializers.DB.Model(&Models.Kol{}).Count(&totalCount).Error; err != nil {
		return nil, 0, err
	}

	// If totalCount is 0, return early with an empty list
	if totalCount == 0 {
		return []*DTO.KolDTO{}, 0, nil
	}

	// Calculate the offset for pagination
	offset := (pageIndex - 1) * pageSize

	// Fetch the KOLs from the database with pagination
	result := Initializers.DB.Offset(offset).Limit(pageSize).Find(&kols)
	if result.Error != nil {
		return nil, 0, result.Error
	}

	// Convert the KOL models to KOL DTOs
	kolDTOs := make([]*DTO.KolDTO, len(kols))
	for i, kol := range kols {
		kolDTOs[i] = &DTO.KolDTO{
			KolID:                kol.KolID,
			UserProfileID:        kol.UserProfileID,
			Language:             kol.Language,
			Education:            kol.Education,
			ExpectedSalary:       kol.ExpectedSalary,
			ExpectedSalaryEnable: kol.ExpectedSalaryEnable,
			ChannelSettingTypeID: kol.ChannelSettingTypeID,
			IDFrontURL:           kol.IDFrontURL,
			IDBackURL:            kol.IDBackURL,
			PortraitURL:          kol.PortraitURL,
			RewardID:             kol.RewardID,
			PaymentMethodID:      kol.PaymentMethodID,
			TestimonialsID:       kol.TestimonialsID,
			VerificationStatus:   kol.VerificationStatus,
			Enabled:              kol.Enabled,
			ActiveDate:           kol.ActiveDate,
			Active:               kol.Active,
			CreatedBy:            kol.CreatedBy,
			CreatedDate:          kol.CreatedDate,
			ModifiedBy:           kol.ModifiedBy,
			ModifiedDate:         kol.ModifiedDate,
			IsRemove:             kol.IsRemove,
			IsOnBoarding:         kol.IsOnBoarding,
			Code:                 kol.Code,
			PortraitRightURL:     kol.PortraitRightURL,
			PortraitLeftURL:      kol.PortraitLeftURL,
			LivenessStatus:       kol.LivenessStatus,
		}
	}

	return kolDTOs, totalCount, nil
}

//func: Từ khóa khai báo một hàm trong Go

//GetKolLogic lấy dữ liệu KOL từ DTO.KolDTO
//[]*DTO.KolDTO : Kiểu dữ liệu trả về một danh sách các con trỏ đến đến KolDTO => KOLs
//error: Nếu có lỗi sẽ trả về

//nil là null trong C++
