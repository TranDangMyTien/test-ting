"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import APIs, { endpoints } from "./utils/APIs";

interface Kols {
  kolID: number;
  userProfileID: number;
  language: string;
  education: string;
  expectedSalary: number;
  expectedSalaryEnable: boolean;
  channelSettingTypeID: number;
  iDFrontURL: string;
  iDBackURL: string;
  portraitURL: string;
  rewardID: number;
  paymentMethodID: number;
  testimonialsID: number;
  verificationStatus: boolean;
  enabled: boolean;
  activeDate: Date;
  active: boolean;
  createdBy: string;
  createdDate: Date;
  modifiedBy: string;
  modifiedDate: Date;
  isRemove: boolean;
  isOnBoarding: boolean;
  code: string;
  portraitRightURL: string;
  portraitLeftURL: string;
  livenessStatus: boolean;
}

interface ApiResponse {
  result: string;
  errorMessage: string;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  nextPageAvailable: boolean;
  previousPageAvailable: boolean;
  KolInformation: Kols[];
}

const Page = () => {
  const [kols, setKols] = useState<Kols[]>([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextPageAvailable, setNextPageAvailable] = useState(true);
  const [previousPageAvailable, setPreviousPageAvailable] = useState(false);

  const loadKols = async () => {
    const url = `${endpoints["kols"]}?pageIndex=${pageIndex}`;
    try {
      setLoading(true);
      setKols([]); // Xóa dữ liệu hiện tại để tránh hiển thị dữ liệu cũ
      const res = await APIs.get<ApiResponse>(url);
      console.log("API Response:", res.data); // Kiểm tra phản hồi API

      if (res.data.result === "Success") {
        // Kiểm tra xem KolInformation có tồn tại và không phải là null
        if (res.data.KolInformation) {
          setKols(res.data.KolInformation);
          setNextPageAvailable(res.data.nextPageAvailable);
          setPreviousPageAvailable(res.data.previousPageAvailable);

          // Nếu không có dữ liệu và không có trang tiếp theo, điều chỉnh pageIndex
          if (
            res.data.KolInformation.length === 0 &&
            !res.data.nextPageAvailable
          ) {
            if (pageIndex > 1) {
              setPageIndex(pageIndex - 1);
            }
          }
        } else {
          console.warn("KolInformation is null or undefined.");
        }
      } else {
        console.error("Error:", res.data.errorMessage);
      }
    } catch (ex) {
      console.error("API error:", ex);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (pageIndex > 0) {
      loadKols();
    }
  }, [pageIndex]);

  const scrollUp = () => {
    console.log("Scroll Up clicked");
    if (previousPageAvailable && pageIndex > 1) {
      setPageIndex((prevPageIndex) => prevPageIndex - 1);
    }
  };

  const scrollDown = () => {
    if (nextPageAvailable) {
      setPageIndex(pageIndex + 1);
    }
  };
  return (
    <>
    <div className="page-container">
      <h1 className="header">KOLs List</h1>
      {kols.length > 0 ? (
        <div className="kols-container">
          {kols.map((kol) => (
            <div key={kol.kolID} className="kol-item">
              <h3 >{kol.code}</h3>
              <p>Language: {kol.language}</p>
              <p>Education: {kol.education}</p>
              <p>Expected Salary: ${kol.expectedSalary}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-kols">
          <p>No KOLs available.</p>
        </div>
      )}
      <div className="scroll-buttons">
        <button onClick={scrollUp} disabled={!previousPageAvailable} className="scroll-button-up">
          Scroll Up
        </button>
        <button onClick={scrollDown} disabled={!nextPageAvailable} className="scroll-button-down">
          Scroll Down
        </button>
      </div>
      {loading && <p className="loading-text">Loading...</p>}
      </div>
    </>
  );
};

export default Page;
