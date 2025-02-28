import styled from "styled-components";
import { theme } from "../../style/theme";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import {
  CONCERT_QUERYSTRING_KEY,
  CONCERT_QUERYSTRING_VALUE,
} from "../../constants/ConcertQuery";
import {
  showPlanFormatter,
  showSortFormatter,
  showStatusFormatter,
  showYearFormatter,
} from "../../utils/foramtter";

export default function ConcertFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const year = searchParams.get(CONCERT_QUERYSTRING_KEY.YEAR);
  const status = searchParams.get(CONCERT_QUERYSTRING_KEY.STATUS);
  const plan = searchParams.get(CONCERT_QUERYSTRING_KEY.PLAN);
  const sort = searchParams.get(CONCERT_QUERYSTRING_KEY.SORT);

  const [isActiveY, setIsActiveY] = useState(false);
  const [isActiveS, setIsActiveS] = useState(false);
  const [isActiveP, setIsActiveP] = useState(false);
  const [isActiveSort, setIsActiveSort] = useState(false);

  const activeY = () => {
    setIsActiveY((current) => !current);
  };
  const activeS = () => {
    setIsActiveS((current) => !current);
  };
  const activeP = () => {
    setIsActiveP((current) => !current);
  };
  const activeSort = () => {
    setIsActiveSort((current) => !current);
  };

  const handleYearOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    const getYear = target.id;
    const params = searchParams;
    params.set(CONCERT_QUERYSTRING_KEY.YEAR, getYear);
    setSearchParams(params);
    activeY();
  };
  const handleStatusOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    const getStatus = target.id;
    const params = searchParams;
    params.set(CONCERT_QUERYSTRING_KEY.STATUS, getStatus);
    setSearchParams(params);
    activeS();
  };
  const handlePlanOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    const getPlan = target.id;
    const params = searchParams;
    params.set(CONCERT_QUERYSTRING_KEY.PLAN, getPlan);
    setSearchParams(params);
    activeP();
  };
  const handleSortOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    const getSort = target.id;
    const params = searchParams;
    params.set(CONCERT_QUERYSTRING_KEY.SORT, getSort);
    setSearchParams(params);
    activeSort();
  };

  useEffect(() => {
    const params = searchParams;
    params.set(CONCERT_QUERYSTRING_KEY.YEAR, CONCERT_QUERYSTRING_VALUE.YEAR);
    params.set(
      CONCERT_QUERYSTRING_KEY.STATUS,
      CONCERT_QUERYSTRING_VALUE.STATUS
    );
    params.set(CONCERT_QUERYSTRING_KEY.PLAN, CONCERT_QUERYSTRING_VALUE.PLAN);
    params.set(CONCERT_QUERYSTRING_KEY.SORT, CONCERT_QUERYSTRING_VALUE.SORT);
    params.set(CONCERT_QUERYSTRING_KEY.PAGE, CONCERT_QUERYSTRING_VALUE.PAGE);
    setSearchParams(params);
  }, []);

  return (
    <StyledConcertFilter>
      <div className="filter">
        <div className="select">
          <span className="title">연도</span>
          <span className="show" onClick={activeY}>
            {year && showYearFormatter(year)}
            {isActiveY ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
          {isActiveY && (
            <div className="option" onClick={handleYearOption}>
              <li id="all">전체</li>
              <li id="2024">2025</li>
              <li id="2024">2024</li>
              <li id="2023">2023</li>
            </div>
          )}
        </div>
        <div className="select">
          <span className="title">일정</span>
          <span className="show" onClick={activeS}>
            {status && showStatusFormatter(status)}
            {isActiveS ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
          {isActiveS && (
            <div className="option" onClick={handleStatusOption}>
              <li id="all">전체</li>
              <li id="proceeding">진행중</li>
              <li id="ended">종료</li>
            </div>
          )}
        </div>
        <div className="select">
          <span className="title">기획</span>
          <span className="show" onClick={activeP}>
            {plan && showPlanFormatter(plan)}
            {isActiveP ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
          {isActiveP && (
            <div className="option" onClick={handlePlanOption}>
              <li id="all">전체</li>
              <li id="team">아르플래닛 주최/주관 공연</li>
              <li id="individual">최혜지 개인프로젝트</li>
            </div>
          )}
        </div>
        <div className="select">
          <span className="title">정렬</span>
          <span className="show" onClick={activeSort}>
            {sort && showSortFormatter(sort)}
            {isActiveSort ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
          {isActiveSort && (
            <div className="option" onClick={handleSortOption}>
              <li id="DESC">최신순</li>
              <li id="ASC">오래된순</li>
            </div>
          )}
        </div>
      </div>
    </StyledConcertFilter>
  );
}

const StyledConcertFilter = styled.div`
  li {
    list-style: none;
  }
  padding: 40px;
  border-top: 1px solid ${theme.color.gray};
  border-bottom: 1px solid ${theme.color.gray};
  margin-bottom: 20px;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 20px;
  }

  .filter {
    margin-left: 60px;
    @media (max-width: ${theme.viewSize.phone}) {
      margin-left: 0;
    }
    display: flex;
    @media (max-width: ${theme.viewSize.phone}) {
      justify-content: left;
    }
    .select {
      display: flex;
      flex-direction: column;
      margin-right: 5px;
      padding: 10px;
      @media (max-width: ${theme.viewSize.phone}) {
        padding: 5px;
      }
      .title {
        font-size: ${theme.text.size.medium};
        font-weight: ${theme.text.weight.medium};
        color: ${theme.color.gray};
        margin-bottom: 10px;
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.semismall};
        }
      }
      .show {
        cursor: pointer;
        padding: 10px 25px;
        border-radius: 5px;
        border: 1px solid ${theme.color.gray};
        transition: transform 0.3s ease;
        font-size: ${theme.text.size.semismall};
        font-weight: ${theme.text.weight.medium};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.verysmall};
          font-weight: ${theme.text.weight.semithin};
          padding: 5px 10px;
        }
      }
      .show:hover {
        transform: scale(1.05);
      }
      .option {
        text-align: left;
        margin-top: 5px;
        border-radius: 5px;
        box-shadow: 0.7px 0.7px 0.7px 0.7px ${theme.color.lightgray};
        border: 0.5px solid black;
        li {
          padding: 10px 10px;
          font-size: ${theme.text.size.semismall};
          font-weight: ${theme.text.weight.medium};
          @media (max-width: ${theme.viewSize.phone}) {
            font-size: ${theme.text.size.verysmall};
          }
        }
        li:hover {
          background-color: ${theme.color.darkgray};
          color: ${theme.color.white};
        }
      }
    }
  }
`;
